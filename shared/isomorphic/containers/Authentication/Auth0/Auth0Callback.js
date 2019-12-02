import React, { useEffect } from 'react';
import Auth0 from './Auth0';
import authActions from '@iso/redux/auth/actions';
const Auth0Callback = () => {
  useEffect(() => {
    Auth0.handleAuthentication();
    authActions.login();
  }, [Auth0.handleAuthentication]);

  return <p>Loading ...</p>;
};

export default Auth0Callback;
