import * as firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID
};

firebase.initializeApp(firebaseConfig);
const db = (firebaseConfig.projectId ? firebase.firestore() : null);

if (db)
    console.log(`connection to database is ok`);
else
    console.log(`ERROR: no connection to database`);

export const STATUS_NEW = "new";


/**
 * collection of orders found in db with the specified statuses
 * @param tableNumber
 * @param statuses: array of statuses for which we want to find orders
 *          (array of strings: use the consts from ../config/status.js)
 * @returns a Promise. When resolved, return value is a collection of orders
 * the promise is rejected when there is no db connection
 */
function getOrderListForTable(tableNumber, statuses) {
    if (!db) return new Promise((resolve, reject) => reject("no database"));
    return db.collection('orders')
        .where("tableNumber", "==", tableNumber)
        .where("status", "in", statuses)
        .get();
}

/**
 * @param tableNumber
 * @returns ID of order for this table
 * Finds orderlist with status NEW for this table.
 * If not found, it returns null.
 */
export async function getOrderListIdForTable(tableNumber) {
    if (!db) return null;
    if (!tableNumber) return null;

    const orderListFromDb = await getOrderListForTable(tableNumber, [STATUS_NEW]);
    if (orderListFromDb.empty) return null;

    return orderListFromDb.docs[0].id;
}

/**
 * @param orderListId
 * @param observer: object with 2 functions:
 *    next:  will be called when the data in the database changes
 *    error: will be called when a problem occurs
 * see Observer Pattern
 */
export function streamOrder(orderListId, observer) {
    if (!db) return;

    db.collection('orders')
        .doc(orderListId)
        .onSnapshot(observer);
}

/**
 * create new orderList in the database for the given tableNumber
 * @param tableNumber
 * @returns a Promise. When resolved, return value is a collection of orders
 * the promise is rejected when there is no db connection
 */
function createNewOrderList(tableNumber) {
    if (!db) return new Promise((resolve, reject) => reject("no database"));
    return db.collection('orders')
        .add({
            created: firebase.firestore.FieldValue.serverTimestamp(),
            tableNumber: tableNumber,
            orders: [],
            totalPrice: 0,
            status: STATUS_NEW
        });
}

/**
 * create
 * @param tableNumber
 * @returns ID of order for this table
 * creates new orderlist with status NEW for this table.
 */
export async function createOrderListForTable(tableNumber) {
    if (!db) return null;
    if (!tableNumber) return null;

    console.log(`creating order for table ${tableNumber}`);
    const newOrder = await createNewOrderList(tableNumber);
    console.log(`orderForTableFromDb for table ${tableNumber}: ${newOrder.id}`);
    return newOrder.id;
}

/**
 * updates orders in the database for the orderId
 * @param orderId
 * @param newOrders
 * @returns a Promise. When resolved, return value is a collection of orders
 * the promise is rejected when there is no db connection
 */
export async function updateOrdersForOrderList(orderId, newOrders) {
    if (!db) return new Promise((resolve, reject) => reject("no database"));
    const doc = db.collection('orders').doc(orderId);
    await doc.update({
        updated: firebase.firestore.FieldValue.serverTimestamp(),
        orders: newOrders,
    });
    console.log(`updateOrdersForOrderList update done for ${orderId}`);
}

