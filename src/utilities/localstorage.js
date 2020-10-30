import {useEffect, useCallback, useState} from "react";

export function useLocalStorage(key, initialValue,
                                convertFromLocalStorage,
                                convertToLocalStorage) {

    const readFromLocalStorage = useCallback(() => {
        const readValue = JSON.parse(localStorage.getItem(key)) || initialValue;
        return (convertFromLocalStorage) ? convertFromLocalStorage(readValue) : readValue;
    }, [convertFromLocalStorage, initialValue, key]);

    const [value, setValueInState] = useState(readFromLocalStorage);

    const setValue = useCallback((newValue) => {
        const valueToWrite = (convertToLocalStorage)
            ? convertToLocalStorage(newValue) : newValue;
        localStorage.setItem(key, JSON.stringify(valueToWrite));
        setValueInState(newValue);
    }, [setValueInState, convertToLocalStorage, key]);

    useEffect(() => {
        const listener = (e) =>
            (e.key === key) && setValueInState(readFromLocalStorage());
        window.addEventListener('storage', listener);
        return () => {
            window.removeEventListener('storage', listener)
        };
    }, [key, readFromLocalStorage, setValueInState]);

    return [value, setValue];
}