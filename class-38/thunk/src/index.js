import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import store from './store';
import List from './components/list.js';

const App = () => {
  return (
    <Provider store={store}>
      <h1>My React App!!</h1>
      <List />
    </Provider>
  )
};

const root = document.getElementById('root');
ReactDOM.render(<App />, root);
