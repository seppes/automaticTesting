import React, {createContext, useCallback, useContext, useMemo, useState} from 'react';
import {useLocalStorage} from "../utilities/localstorage";

const MessageContext = createContext();


export function MessageProvider(props) {
    const [consent, setConsent] = useLocalStorage("consent");
    const [message, setMessageInternal] = useState(consent ? null
        : "Deze website gebruikt localStorage. Is dat ok?");

    const setMessage = useCallback((newMessage) => {
        setConsent(true);
        setMessageInternal(newMessage);
    }, [setConsent, setMessageInternal]);
    const api = useMemo(() => ({
            message, setMessage
        }), [message, setMessage]
    );

    return (
        <MessageContext.Provider value={api}>
            {props.children}
        </MessageContext.Provider>
    )
}

export const useMessageContext = () => useContext(MessageContext);
