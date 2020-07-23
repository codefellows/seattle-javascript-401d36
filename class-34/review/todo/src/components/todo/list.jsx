import React, {useState, useContext} from 'react';
import {ListGroup, Toast, Badge, Container, Col, Row} from 'react-bootstrap';
import { SettingsContext } from '../../context/settings.jsx'


const TodoList = (props) => {

let StatusText = 'Pending'
const context = useContext(SettingsContext);

const handleVariant = (item) => {
  if(item.complete === false){
    StatusText = 'Pending'
    return 'success'
  }
  StatusText = 'Complete'
  return 'danger'
}



    return (
      <>
      <ListGroup as="ul" 
      variant="flush"
      >
        {props.list.map(item => (
          <Toast 
          as="li"
          
          onClose={()=> props.handleDelete(item._id)}
          className={`complete-${item.complete.toString()}`}
          key={item._id}
          > 
            <Toast.Header
            >
              <Container fluid="true">
            <Row fluid="true">
          <Col>
          <Badge pill variant={handleVariant(item)} onClick={() => props.handleComplete(item._id)}>{StatusText}</Badge>{' '}
          </Col>

              <Col md lg sm="auto">
              <h4>
              {item.assignee}
            </h4>
              </Col>
              </Row >
              </Container>
            
            </Toast.Header>
            <Toast.Body>
           <Container fluid>
              <Row >
                <section className="itemInfo">
                <Col>
                  <h4>
                  {item.text}
                   </h4>
                </Col>
                 <Col>

                <p>
                Difficulty:{item.difficulty}
                </p>
                </Col>
              </section>
              </Row>
           </Container>
            </Toast.Body>  
          </Toast>
        ))}
      </ListGroup>
      </>
    );
}

export default TodoList;
