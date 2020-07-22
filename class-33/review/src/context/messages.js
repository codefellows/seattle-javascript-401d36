import React, { useState } from 'react';

export const MessageContext = React.createContext();

const MessageProvider = (props) => {
    const [ messages, setMessages ] = useState([]);

    const state = {
        messages,
        addMessage: (message) => setMessages([...messages, message]),
    }

    return (
        <MessageContext.Provider value={state}>
            {props.children}
        </MessageContext.Provider>
    )
}

export default MessageProvider;