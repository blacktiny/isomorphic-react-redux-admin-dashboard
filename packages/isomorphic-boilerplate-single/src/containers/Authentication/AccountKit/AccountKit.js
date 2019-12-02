import accountKitConfig from '@iso/config/account_kit.config';
import history from '@iso/lib/helpers/history';

const valid = accountKitConfig && accountKitConfig.appId;
const AccountKit = window.AccountKit;

class AccountKitHelper {
  isValid = valid;
  constructor() {
    if (this.isValid) {
      AccountKit.init(accountKitConfig);
    }
    this.loginCallback = this.loginCallback.bind(this);
  }
  // login callback
  loginCallback = response => {
    if (response.status === 'PARTIALLY_AUTHENTICATED') {
      var code = response.code;
      // var csrf = response.state;
      localStorage.setItem('id_token', code);
      history.replace('/dashboard');
      // Send code to server to exchange for access token
    } else if (response.status === 'NOT_AUTHENTICATED') {
      // handle authentication failure
      console.log('Authentication Failed');
    } else if (response.status === 'BAD_PARAMS') {
      // handle bad parameters
      console.log('Possible Wrong Information Provided');
    }
  };

  login = type => {
    AccountKit.login(
      type, // PHONE or EMAIL
      {}, // will use default values if not specified
      this.loginCallback
    );
  };
}

export default new AccountKitHelper();
