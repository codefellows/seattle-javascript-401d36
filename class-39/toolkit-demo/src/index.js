// the first things our js project does is brings in code libraries
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

// this is our first code that we've written ourselves.
import store from './store';
import List from './components/list.js';

const App = () => {

  // instatiate our classes / functional components
  // run our component logic
  return (
    <Provider store={store}>
      <h1>My React App!!</h1>
      <List />
    </Provider>
  )
};

const root = document.getElementById('root');
ReactDOM.render(<App />, root);
