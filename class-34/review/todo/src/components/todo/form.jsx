import React, { useState, useEffect } from 'react';

import useForm from '../../hooks/useForm'

import Button from 'react-bootstrap/Button';

const TodoForm = (props) => {

  const [formData, setFormData] = useState({});
  const [values, handleChange, handleSubmit] = useForm(handleDataForm);


  function handleDataForm(data){
    setFormData(data);
    props.handleSubmit(data)
  }


    return (
      <>
        <h3>Add Item</h3>
        <form onSubmit={handleSubmit}>
          <label>
            <span>To Do Item</span>
            <input
              name="text"
              placeholder="Add To Do List Item"
              onChange={handleChange}
            />
          </label>
          <label>
            <span>Difficulty Rating</span>
            <input defaultValue="1" type="range" min="1" max="5" name="difficulty" onChange={handleChange} />
          </label>
          <label>
            <span>Assigned To</span>
            <input type="text" name="assignee" placeholder="Assigned To" onChange={handleChange} />
          </label>
          <Button type="submit">Add Item</Button>
        </form>
        </>
    );
}

export default TodoForm;
