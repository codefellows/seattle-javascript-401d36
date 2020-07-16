import React from 'react';
import ReactDOM from 'react-dom';

import Form from './components/form.js';

const App = () => {
  return (
    <Form />
  )
};

const root = document.getElementById('root');
ReactDOM.render(<App />, root);
