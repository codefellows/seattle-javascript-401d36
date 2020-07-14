import React from 'react';

import Counter from './components/counter.js';

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Counter />
      </React.Fragment>
    )
  }
}

export default App;