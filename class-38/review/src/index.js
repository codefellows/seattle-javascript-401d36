import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";

import Form from "./form.js";
import store from './store';

const App = () => {
  return (
    <Provider store={store}>
      <Form />
    </Provider>
  );
};

const root = document.getElementById('root');
ReactDOM.render(<App />, root);
