import React, { useState } from 'react';
import { connect } from 'react-redux';

import { Button, TextField, Typography } from '@material-ui/core';

// we need our functions ( redux calls these actions )
import { login, logout } from '../store/auth/actions.js';

const Auth = (props) => {
  console.log(props);

  const { login, logout, auth } = props;

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');


  return (
    // we still want this is we are just need to pass values without any management functions within that component
    // <List items={props.listItems} />
    <>
      <form>
        <TextField value={username} onChange={(e) => setUsername(e.target.value)} placeholder="username" />
        <TextField value={password} type="password" onChange={(e) => setPassword(e.target.value)} placeholder="password" />
        <Button onClick={(e) => login({ username, password })}>Login</Button>
        <Button onClick={(e) => logout()}>Logout</Button>
      </form>
    </>
  )
}

// Paul We need some objects to pass into our connect
const mapStateToProps = data => {
  return {
    auth: data.auth,
  }
}
const mapDispatchToProps = { login, logout };

// this connect function, handles the opt-in powers of our component! This must be done 
export default connect(mapStateToProps, mapDispatchToProps)(Auth);