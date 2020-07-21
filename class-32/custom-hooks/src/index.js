import React, { useState } from 'react';
import ReactDOM from 'react-dom';

import useForm from './hooks/useForm.js';

const App = () => {

  const [formData, setFormData] = useState({});
  const [values, handleChange, handleSubmit] = useForm(handleFormData);

  function handleFormData(data) {
    setFormData(data);
    console.log('form has been submitted with ', data);
  }
  console.log(`Here are values constrolled by our form hook`, values)
  // console.log(`Values controlled by our index file: `, formData);
  return (
    // render formData here
    <>
      <form onSubmit={handleSubmit}>
        <input onChange={handleChange} name="Username" placeholder="Username" type="text" />
        <input onChange={handleChange} name="Password" placeholder="password" type="password" />
        <button type="submit">Submit me!</button>
      </form>
      {Object.keys(formData).map(key => <p key={key}>{formData[key]}</p>)}
    </>
  )
};

const root = document.getElementById('root');
ReactDOM.render(<App />, root);
