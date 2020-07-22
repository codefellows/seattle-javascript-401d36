import React from 'react';

import useForm from './hooks/useForm.js';
import useAjax from './hooks/useAjax.js';

const Form = () => {

  const [ formData, handleChange, handleSubmit ] = useForm(addItem);
  const [ data, request ] = useAjax({
    url: formData.url,
    method: 'post',
    mode: 'cors',
    cache: 'no-cache',
    headers: { 'Content-Type': 'application/json' },
    data: JSON.stringify(formData.message),
  });

  console.log(data);
  
  // this isn't doing anything, just a dummy callback for useForm
  function addItem(item) {
    let url = 'https://api-js401.herokuapp.com/api/v1/todo'
    console.log(item);
  }

  // function formCallback(data) {
  //   let url = `localhost:3000/message/${data.user}:${data.message}`;

  //   fetch(url).then(console.log).catch(console.log);
  // }

  return (
    <form onSubmit={handleSubmit}>
      <input name="url" onChange={handleChange} />
      <input name="message" onChange={handleChange} />
      <button type="submit">Submit Me!!</button>
    </form>
  )   
}

export default Form;