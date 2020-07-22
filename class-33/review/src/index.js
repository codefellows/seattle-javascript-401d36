import React from 'react';
import ReactDOM from 'react-dom';

import ReviewForm from './review-form.js';
import Messages from './messages.js';
import MessageForm from './messages-form.js';
import MessageProvider from './context/messages.js';

// this is our top parent elements, we are goin to add a context provider here

const App = () => {
  return (
    <MessageProvider>
      <ReviewForm />
      <Messages />
      <MessageForm />
    </MessageProvider>
  )
};

const root = document.getElementById('root');
ReactDOM.render(<App />, root);
