import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import ReactDOM from 'react-dom';

// `npm install bootstrap` than use this path at the beginning of your app
import 'bootstrap/dist/css/bootstrap.min.css';

import Counter from './components/counter.js';
import People from './components/people.js';

const App = () => {

  const [renderPeople, togglePeople] = useState(true);

  return (
    <>
      <Counter name="Jacob" number={0} />
      <Button onClick={() => togglePeople(!renderPeople)}>Toggle Me</Button>
      {renderPeople ? <People /> : null}
    </>
  )
};

const root = document.getElementById('root');
ReactDOM.render(<App />, root);
