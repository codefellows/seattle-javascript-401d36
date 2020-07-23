import React from 'react';
import ReactDOM from 'react-dom';

import Auth from './auth.js'; // hiding or showing children based on context values
import Login from './login.js';
import AuthProvider from './auth-context.js';

const App = () => {
  return (
    <AuthProvider>
      <Auth capability="read">
        <h1>My React App!!</h1>
      </Auth>
      <Login />
    </AuthProvider>
  )
};

const root = document.getElementById('root');
ReactDOM.render(<App />, root);
