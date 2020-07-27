import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import store from './store';

import Counter from './counter.js';

const App = () => {
  return (
    <Provider store={store}>
      <Counter defaultName="Jacob" />
    </Provider>
  );
};

const root = document.getElementById('root');
ReactDOM.render(<App />, root);
