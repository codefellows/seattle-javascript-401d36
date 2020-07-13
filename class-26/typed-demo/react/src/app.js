import React from 'react';
import Header from './header.js';

import './app.scss';

// create our component, what makes something a React Component
// it must return JSX
class App extends React.Component {
  constructor() {
    super();
    // Each component has it's own state
    this.state = {
      words: 'Default State',
    };

    // we must bind methods (not defined with fat arrow functions to the React.Components "this")
    this.handleStateWords = this.handleStateWords.bind(this);
  }

  handleStateWords(words) {
    this.setState({ words });
  }

  render() {

    console.log(this.state);

    // new React.component({words: 'aiuerhau', handleState: function})
    return (
      <div>
        <Header
          words={this.state.words}
          handleState={this.handleStateWords}
        />
        {/* We  */}
        <p>{this.state.words}</p>
      </div>
    );
  }
}

// module.exports = App
// vs.
// module.exports = {
//   App
// }

export default App;
