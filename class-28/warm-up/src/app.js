import React from 'react';

import Group1 from './components/group1.js';
import Group2 from './components/group2.js';

class App extends React.Component {
  render() {
    return (
      <>
        <Group1 />
        <Group2 />
      </>
    )
  }
}

export default App;