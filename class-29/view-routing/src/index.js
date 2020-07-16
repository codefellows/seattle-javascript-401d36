import React from 'react';
import ReactDOM from 'react-dom';

import './style.scss';

// import If from './components/if.js';
// import Modal from './components/modal.js';
import { BrowserRouter, Route, NavLink as Link } from 'react-router-dom';

const App = () => {
  return (
    <>
      {/* <Modal>
         <ul>
           <li>Item 1</li>
           <li>Item 2</li>
         </ul>
       </Modal> */}
      <BrowserRouter>
        <h1>Here's my app</h1>
        <nav>
          <Link activeClassName='selected' exact to="/list">Go to List</Link>
          <Link activeClassName="selected" exact to="/">Home</Link>
        </nav>
        <Route exact path="/">
          <p>Welcome to home</p>
        </Route>
        <Route exact path="/list">
          <ul>
            <li>Item 1</li>
            <li>Item 2</li>
          </ul>
        </Route>
      </BrowserRouter>
    </>
  )
};

const root = document.getElementById('root');
ReactDOM.render(<App />, root);
