import React from 'react';
import ReactDOM from 'react-dom';

import DisplayMessage from './components/displayMessages.js';
import Input from './components/input.js';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      messages: [],
    }
  }

  // built into react, this runs wheneve this component mounts
  componentDidMount() {
    fetch('http://localhost:3000/messages')
      .then(data => data.json())
      .then(messages => this.setState({ messages }));
  }

  addMessage = (message) => {
    this.setState({ messages: [...this.state.messages, message] });
  }

  render() {
    return (
      <>
        <h1>Chat App</h1>
        <DisplayMessage arrMessages={this.state.messages} />
        <Input handler={this.addMessage} url='http://localhost:3000/messages' />
      </>
    )
  }
}

const root = document.getElementById('root');
ReactDOM.render(<App />, root);
