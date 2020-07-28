import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import store from './store';

import Auth from './components/auth-form.js';
import Counter from "./components/counter.js";

const App = () => {
  return (
    <Provider store={store}>
      <Auth />
      <Counter />
    </Provider>
  )
};

const root = document.getElementById('root');
ReactDOM.render(<App />, root);
