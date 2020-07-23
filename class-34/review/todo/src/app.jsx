import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import SettingsProvider from './context/settings.jsx'

import 'bootstrap/dist/css/bootstrap.min.css';

import ToDo from './components/todo/todo.jsx';
// import Pages from './components/todo/pages';

const App = () => {
  return (
    <>
      <Navbar defaultActiveKey="/" bg="primary" variant="light">
        <Nav.Link exact path="/">Home</Nav.Link>
      </Navbar>
      <SettingsProvider>
        <ToDo />
        {/* <Pages /> */}
      </SettingsProvider>
    </>
  );
}

export default App;