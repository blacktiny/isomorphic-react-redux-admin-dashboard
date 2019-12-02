import { EventEmitter } from 'events';
import Auth0Lock from 'auth0-lock';
import history from '@iso/lib/helpers/history';
import Auth0Config from '@iso/config/auth0.config';
import notification from '@iso/components/Notification';

class Auth0Helper extends EventEmitter {
  isValid = Auth0Config.clientID && Auth0Config.domain;
  lock = this.isValid
    ? new Auth0Lock(
        Auth0Config.clientID,
        Auth0Config.domain,
        Auth0Config.options
      )
    : null;
  constructor() {
    super();
    this.login = this.login.bind(this);
    this.logout = this.logout.bind(this);
    this.handleAuthentication = this.handleAuthentication.bind(this);
    this.isAuthenticated = this.isAuthenticated.bind(this);
  }
  login() {
    if (!this.lock) {
      return;
    }
    this.lock.show();
  }
  handleAuthentication(props) {
    // Add callback Lock's `authenticated` event
    this.lock.on('authenticated', this.setSession.bind(this));
    // Add callback for Lock's `authorization_error` event
    this.lock.on('authorization_error', error =>
      notification('error', 'Wrong mail or password')
    );
  }
  setSession(authResult) {
    // Set the time that the access token will expire at
    let expiresAt = JSON.stringify(
      authResult.expiresIn * 1000 + new Date().getTime()
    );
    localStorage.setItem('access_token', authResult.accessToken);
    localStorage.setItem('id_token', authResult.idToken);
    localStorage.setItem('expires_at', expiresAt);
    // navigate to the dashboard route
    history.replace('/dashboard');
  }

  logout() {
    // Clear access token and ID token from local storage
    localStorage.removeItem('access_token');
    localStorage.removeItem('id_token');
    localStorage.removeItem('expires_at');
    // navigate to the home route
    history.replace('/');
  }

  isAuthenticated() {
    // Check whether the current time is past the
    // access token's expiry time
    return (
      new Date().getTime() < JSON.parse(localStorage.getItem('expires_at'))
    );
  }
}
export default new Auth0Helper();
