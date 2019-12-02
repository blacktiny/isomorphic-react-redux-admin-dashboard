import React, { useState } from 'react';
import Cookies from 'js-cookie';
import { TOKEN_COOKIE, USER_COOKIE } from '../helpers/session';
import redirect from '../helpers/redirect';

export const AuthContext = React.createContext();

const fakeUserData = {
  id: 1,
  name: 'Jhon Doe',
  avatar: '/static/placeholder/profilepic.png',
  roles: ['USER', 'ADMIN'],
};

/**
 * We have used Fake JWT token from "jwt.io"
 * This is a sample token to show auth is working
 * Your token will come from your server when user successfully loggedIn.
 */

const fakeToken =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjEiLCJuYW1lIjoidGFyZXEgam9iYXllcmUiLCJyb2xlcyI6ImFkbWluIn0.k74_B-zeWket405dIAt018mnQFMh_6_BTFpjB77HtRQ';

const addItem = (key, value = '') => {
  /**
   *  Using the local storage code....
   */
  // if (key) localStorage.setItem(key, value);

  /**
   *  Using the Cookies code...
   */
  if (key) Cookies.set(key, value, { expires: 7 });
};

const clearItem = key => {
  /**
   *  Using the local storage code....
   */
  // localStorage.removeItem(key);

  /**
   *  Using the Cookies code...
   */
  Cookies.remove(key);
};

const isValidToken = () => {
  /**
   *  Using the local storage code....
   */
  // const token = localStorage.getItem(TOKEN_COOKIE);

  /**
   *  Using the Cookies code...
   */
  const token = Cookies.get(TOKEN_COOKIE);
  // JWT decode & check token validity & expiration.
  if (token) return true;
  return false;
};

const AuthProvider = props => {
  const [loggedIn, setLoggedIn] = useState(isValidToken());
  // const [loggedOut, setLoggedOut] = useState(true);
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);

  const signIn = params => {
    /**
     * Make post request here to authenticate with fetch
     * if returns true then change the state
     */
    console.log(params, 'sign in form Props');
    setUser(fakeUserData);
    setToken(fakeToken);
    addItem(TOKEN_COOKIE, fakeToken);
    addItem(USER_COOKIE, fakeUserData);
    setLoggedIn(true);
  };
  const signUp = params => {
    console.log(params, 'sign up form Props');
    setUser(fakeUserData);
    setToken(fakeToken);
    addItem(TOKEN_COOKIE, fakeToken);
    addItem(USER_COOKIE, fakeUserData);
    setLoggedIn(true);
  };

  /**
   * For 3rd-party Authentication [e.g. Autho0, firebase, AWS etc]
   *
   */
  const tokenAuth = (token, user = {}) => {
    setUser(user);
    setToken(token);
    addItem(TOKEN_COOKIE, token);
    addItem(USER_COOKIE, user);
    setLoggedIn(true);
  };

  const forgetPass = params => {
    console.log(params, 'forget password form Props');
  };
  const changePass = params => {
    console.log(params, 'change password form Props');
  };

  const logOut = () => {
    setUser(null);
    setToken(null);
    clearItem(TOKEN_COOKIE);
    clearItem(USER_COOKIE);
    setLoggedIn(false);
    redirect({}, '/');
  };

  return (
    <AuthContext.Provider
      value={{
        loggedIn,
        logOut,
        signIn,
        signUp,
        forgetPass,
        changePass,
        tokenAuth,
        user,
        token,
      }}
    >
      <>{props.children}</>
    </AuthContext.Provider>
  );
};

export default AuthProvider;
