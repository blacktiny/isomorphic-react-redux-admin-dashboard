import { EventEmitter } from 'events';
import Auth0Lock from 'auth0-lock';
import history from '@iso/lib/helpers/history';
import Auth0Config from '@iso/config/auth0.config';
import notification from '@iso/components/Feedback/Notification';

class Auth0 extends EventEmitter {
  lock = new Auth0Lock(
    Auth0Config.clientID,
    Auth0Config.domain,
    Auth0Config.options
  );

  login = () => {
    if (!this.lock) {
      return;
    }
    this.lock.show();
  };
  handleAuthentication = () => {
    // Add callback Lock's `authenticated` event
    this.lock.on('authenticated', this.setSession);
    // Add callback for Lock's `authorization_error` event
    this.lock.on('authorization_error', error =>
      notification('error', 'Wrong mail or password')
    );
  };
  setSession = authResult => {
    // Set the time that the access token will expire at
    let expiresAt = JSON.stringify(
      authResult.expiresIn * 1000 + new Date().getTime()
    );
    localStorage.setItem('access_token', authResult.accessToken);
    localStorage.setItem('id_token', authResult.idToken);
    localStorage.setItem('expires_at', expiresAt);
    // navigate to the dashboard route
    history.replace('/dashboard');
  };
  logout = () => {
    // Clear access token and ID token from local storage
    localStorage.removeItem('access_token');
    localStorage.removeItem('id_token');
    localStorage.removeItem('expires_at');
    // navigate to the home route
    history.replace('/');
  };

  isAuthenticated = () => {
    let expiresAt = JSON.parse(localStorage.getItem('expiresAt'));
    return new Date().getTime() < expiresAt;
  };
}
export default new Auth0();
