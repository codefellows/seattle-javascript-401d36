import { useContext } from 'react';
import { AuthContext } from './auth-context.js';

const Auth = (props) => {
  let authorized = false;
  const context = useContext(AuthContext);

  if (Object.keys(context.user).length && props.capability) {
    authorized = context.user.capabilities.includes(props.capability);
  }
  return authorized ? props.children : null;
}


export default Auth;
