import { useState } from 'react';

// takes in a callback to use when we want to submit our form
const useForm = (callback) => {

  // these are our form values that we'll use in other componenets
  const [values, setValues] = useState({});


  // 2 form function":

  const handleSubmit = (event) => {
    if (event) event.preventDefault();
    callback(values);
  }

  const handleChange = (event) => {
    event.preventDefault();
    //event = {} => propertiese set by the DOM
    // event.targe => the element that the event was performed against <button onClick={handleChange} name="usename" value="Jacob">

    setValues({ ...values, [event.target.name]: event.target.value });
  }

  // not returning JSX, but other fucntionality that we define above.
  return [
    // place getters and setter here
    values,
    handleChange,
    handleSubmit,
  ];
}

export default useForm;