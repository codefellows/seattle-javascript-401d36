import React from 'react';
import { Redirect } from 'react-router-dom';

// do we need state? Or can we get away with just function

const User = (props) => {

  const userData = props.user;

  if (userData.token) {
    return (
      <div>
        <p>{props.username}</p>
        <p>{props.password}</p>
      </div>
    )
  } else {
    return <Redirect to="/auth" />
  }
}

export default User;
