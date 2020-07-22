import React, { useContext } from 'react';
import { MessageContext } from './context/messages.js';
import useForm from './hooks/useForm.js';

const MessageForm = () => {
    const context = useContext(MessageContext);
    const [ formData, handleChange, handleSubmit ] = useForm(context.addMessage);

    return (
        <form onSubmit={handleSubmit}>
            <input name="user" onChange={handleChange} type="text"/>
            <button type="submit">Submit</button>
        </form>
    )
}

export default MessageForm;