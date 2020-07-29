import React, { useState } from "react";
import { connect } from 'react-redux';
import { Paper, Input, Button, Container } from "@material-ui/core";
import { sendMessage, getMessages } from './store/message';

function Form(props) {
  const createMessage = data => {
    let time = new Date();
    return { text: data.text, createdAt: time, author: data.author };
  };

  return (
    <Container className="App">
      <Paper>
        <Input />
        <Button color="secondary" onClick={() => {
          const message = createMessage({ text: 'test', author: 'Jacob' });
          props.sendMessage(message);
        }}>Send Message</Button>
        <Button color="secondary">Fetch Message</Button>
        <h1>Our Form</h1>
      </Paper>
    </Container>
  );
}

const mapStateToProps = (state) => {
  return {
    messageData: state.messages
  }
}

const mapDispatchToProps = { sendMessage, getMessages };

// const connectComponent = connect(mapStateToProps, mapDispatchToProps);
export default connect(mapStateToProps, mapDispatchToProps)(Form);