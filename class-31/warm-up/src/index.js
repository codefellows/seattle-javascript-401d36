import React from 'react';
import ReactDOM from 'react-dom';

// import Auth from './components/auth';
import User from './components/user';

import { BrowserRouter, Route } from 'react-router-dom';

// const App = () => {
//   return <h1>My React App!!</h1>;
// };

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      user: { token: 'jhadsfuishgf873687263487' },
      username: 'test',
      password: 'test',
    }
  }

  componentDidMount() {

  }

  // any other lifeCycle method

  handlePassword = () => {
    if (this.state.password) {
      setTimeout(() => {
        this.setState({ password: '' });
      }, 3000);
    }
  }

  render() {
    return (
      <BrowserRouter>
        <Route path="/auth">
          {/* <Auth /> */}
          <h1>Auth Stuff</h1>
        </Route>
        <Route path="/user">
          <User
            user={this.state.user}
            username={this.state.username}
            password={this.state.password}
          />
        </Route>
      </BrowserRouter>
    )
  }
}

const root = document.getElementById('root');
ReactDOM.render(<App />, root);
