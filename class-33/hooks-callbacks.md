
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
