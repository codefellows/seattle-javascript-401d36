import React from 'react';
import { AuthContext } from './auth-context.js';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      username: '',
      password: '',
    }
  }

  // React magic, this is how to set context in a class
  static contextType = AuthContext;

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.context.login(this.state.username, this.state.password)
  }

  render() {
    return (
      <>
        {this.context.user.username ? <button onClick={this.context.logout}>logout</button> : null}
        {!this.context.user.username
          ? <form onSubmit={this.handleSubmit}>
            <input name="username" value={this.state.username} onChange={this.handleChange} />
            <input name="password" value={this.state.password} onChange={this.handleChange} />
            <button type="submit">Login</button>
          </form>
          : null
        }
      </>
    )
  }
}

export default Login;