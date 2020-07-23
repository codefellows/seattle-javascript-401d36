import React, {useState, useEffect} from 'react';
import TodoForm from './form.jsx';
import TodoList from './list.jsx';
import {Container, Row, Col} from 'react-bootstrap'


import './todo.scss';

const ToDo = (props) => {

  

  const [list, setList] = useState([]); 
  const [count, setCount] = useState(0); 


  useEffect(() => {
    instantiateItems();
  }, []);
 

  const addItem = (item) => {
    item._id = Math.random();
    item.complete = false;
    setList([...list, item]);
  };

  const toggleComplete = id => {

    let item = list.filter(i => i._id === id)[0] || {};

    if (item._id) {
      item.complete = !item.complete;
      let newList = list.map(listItem => listItem._id === item._id ? item : listItem);
      setList(newList);
    }
  };

  const instantiateItems = () => {
    // let list = getList()

    let list = [
      { _id: 1, complete: false, text: 'Clean the Kitchen', difficulty: 3, assignee: 'Person A' },
      { _id: 2, complete: false, text: 'Do the Laundry', difficulty: 2, assignee: 'Person A' },
      { _id: 3, complete: false, text: 'Walk the Dog', difficulty: 4, assignee: 'Person B' },
      { _id: 4, complete: true, text: 'Do Homework', difficulty: 3, assignee: 'Person C' },
      { _id: 5, complete: false, text: 'Take a Nap', difficulty: 1, assignee: 'Person B' },
    ];

    setList(list);
  }

    useEffect(() => {
      let number = list.filter(item => !item.complete).length;
      setCount(number);
    })

    return (
      <>

        <Container fluid >
    
         <Row fluid>
           <section className="total">
          <h2>
          There are {count} Items To Complete
          </h2>
          </section>
          </Row>
          <section className="toDo">
          <Row>
            <Col>
          <div>
            <TodoForm handleSubmit={addItem} />
          </div>
          </Col>
          <Col>
          <div>
            <TodoList
              list={list}
              handleComplete={toggleComplete}
            />
          </div>
          </Col>
          </Row>
          </section>
        </Container>
        </>
    );
}

export default ToDo;
