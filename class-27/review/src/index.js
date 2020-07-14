import React from 'react';
import ReactDOM from 'react-dom';

import App from './app.js';

class Main extends React.Component {
  render() {
    // => App = new App({coolProp: 'hello world'});
    return (
      <>
        {/* <App coolProp={'something different'} /> */}
        <App />
      </>
    )
  }
}

const root = document.getElementById('root');
ReactDOM.render(<Main />, root);