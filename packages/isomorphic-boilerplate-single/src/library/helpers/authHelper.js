import jwtDecode from 'jwt-decode';
import SuperFetch from './superFetch';

class AuthHelper {
  login = async userInfo => {
    if (!userInfo.username || !userInfo.password) {
      return { error: 'please fill in the input' };
    }
    return await SuperFetch.post('login', userInfo).then(response => {
      return this.checkExpirity(response.token);
    });
  };
  async checkDemoPage(token) {
    if (this.checkExpirity(token).error) {
      return { error: 'Token expired' };
    }
    return await SuperFetch.get('secret/test', { token })
      .then(response => ({
        status: '200',
        message: 'Success',
      }))
      .catch(error => ({ error: JSON.stringify(error) }));
  }
  checkExpirity = token => {
    if (!token) {
      return {
        error: 'not matched',
      };
    }
    try {
      const profile = jwtDecode(token);

      const expiredAt = profile.expiredAt || profile.exp * 1000;

      if (expiredAt > new Date().getTime()) {
        return {
          ...profile,
          token,
          expiredAt: new Date(expiredAt),
        };
      } else {
        return { error: 'Token expired' };
      }
    } catch (e) {
      console.log(e);

      return { error: 'Server Error' };
    }
  };
}
export default new AuthHelper();
