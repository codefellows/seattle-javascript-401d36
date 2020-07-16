import React from 'react';

class DisplayMessages extends React.Component {

  // Since we are getting all our messages from props, we don't necessarily need this constructor
  constructor() {
    super();
    this.state = {
      arrMessages: [],
      messageToUpdate: {},
    };
  }

  // updateMessage() {

  // }

  render() {
    let arr = this.props.arrMessages;
    return (
      <div>
        <ul>
          {/* {arr.map((message, idx) => {
            return (
              <li key={idx}>
                {message.text}
              </li>
            );
          })} */}
          <Messages messages={arr} />
        </ul>
      </div>
    );
  }
}

const Messages = (props) => props.messages.map((message, idx) => {
  return (
    <li key={idx}>
      {message.text}
    </li>
  );
});


export default DisplayMessages;

