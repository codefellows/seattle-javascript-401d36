import React from 'react';

import Counter from './components/counter.js';
import Title from './components/title.js';

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        {/* <p>Our Components will go here</p> */}
        <Title />
        <Counter />
      </React.Fragment>
    )
  }
}

export default App;