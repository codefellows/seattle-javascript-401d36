
# Callback and Hooks

Hooks are deceptive, it may seem like they doing some magic, but really they are function that are wrapping up some logic and returning values that point to scpefic functionlity defined in the function.  Think of function that just defines other functions and returns them:

```js

// this is defined in a file, say useForm.js
function useForm(callback) {

  // defined a state in order to let react do its thing.
  const [ formData, setFormData ] = useState({});

  function handleChange(e) {
    // console.log(e.target.value);
    setFormData({...formData, [e.target.name]: e.target.value });
  }

  // when the time is "handleSubmit
  function handleSubmit(e) {
    e.preventDefault();
    callback(formData);
  }

  // place this function in an array
  return [
    formData,
    handleChange,
    handleSubmit
  ];
}

export default useForm;

// todo.js
// // this is defined in the component
// const useForm = require('./use-form');

import useForm from './useForm.js'

const Todo = (props) => {

  const formStuff = useForm(() => console.log('callback running')));


  formStuff[0] // 'one'
  formStuff[1] // function handleChange
  formStuff[2] // handleSubmit;

  const saveToDataBase = (formData) => {
    fetch(url, formData);
  }

  const [ formData, handleChange, handleSubmit ] = useForm(saveToDatabase, updateToDatabase);

  console.log(handleSubmit)

  const [formData, handleChange, handleSubmit] = useForm(() => 1);

....

// return (
//   <form onSubmit={handleSubmit}>
//      <input onChange={handleChange} />
//   </form>
// )


export default Todo;
```

- here is a vanilla javascript function, written with the same design pattern as our react hooks:
  
```js

// how hooks

// import { useState } from 'react';

function useForm(cb) {

  // const [ get, set ] = useState('');

  function handleChange(value) {
    console.log(value);
  }

  function handleSubmit(value) {
    console.log(value);
    cb();
    //   cb(value);
  }

  return ['one', handleChange, handleSubmit];
}

const arrayOfThings = useForm('three');

console.log(arrayOfThings) // ['one', 'two', 'three'];

const log = () => console.log('three');
// const func = useForm(() => console.log('three'));
// const func = useForm(log);

const [one, handleChange, handleSubmit] = useForm(log);
// defined in the line above
handleChange('some random value');
handleSubmit();
// console.log('here is anon', handleSubmit);
// console.log(func) // => ['one', 'two', () => console.log('three')];

// func[0] / func[1] / func[2]
// func[2]() // => 'three'

```
