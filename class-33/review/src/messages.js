import React, { useContext } from 'react';
import { MessageContext } from './context/messages.js';

const Messages = () => {
    const context = useContext(MessageContext);

    console.log(context);

    return (
        <>
        <p>Messages!!!</p>
        {context.messages.map((message) => <p>{message.user}</p>)}
        </>
    )
}

export default Messages;
