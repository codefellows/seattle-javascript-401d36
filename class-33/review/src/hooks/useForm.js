import { useState } from 'react';

const useForm = (callback) => {

    const [ formData, setFormData ] = useState({});

    // this hooks needs a function for handle Input changes and handle Form Submissions
    const handleChange = (event) => {
        // {} => "Jacob" 
        setFormData({ ...formData,  [event.target.name]: event.target.value} );
    }

    // Just needs to pass out form data to some callback
    const handleSubmit = (event) => {
        event.preventDefault();
        callback(formData);
    }

    // what sets this apart from components, it doesnt return jsx
    return [formData, handleChange, handleSubmit];
}

export default useForm;