export default {
  domain: 'redq.auth0.com',
  clientID: 'V0PTjCXJ1MaaUFQQuxbnzVRi3YQ5AATd',
  allowedConnections: ['Username-Password-Authentication'],
  rememberLastLogin: true,
  language: 'en',
  closable: true,
  options: {
    auth: {
      autoParseHash: true,
      responseType: 'token id_token',
      redirect: true,
      redirectUrl: 'http://localhost:3000/auth0loginCallback',
    },
    languageDictionary: {
      title: 'Isomorphic',
      emailInputPlaceholder: 'demo@gmail.com',
      passwordInputPlaceholder: 'demodemo',
    },
    theme: {
      labeledSubmitButton: true,
      logo: 'https://s3.amazonaws.com/redqteam.com/logo/isomorphic.png',
      primaryColor: '#E14615',
      authButtons: {
        connectionName: {
          displayName: 'Log In',
          primaryColor: '#b7b7b7',
          foregroundColor: '#000000',
        },
      },
    },
  },
};
