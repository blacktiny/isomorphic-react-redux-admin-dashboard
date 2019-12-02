import firebase, { auth } from './firebase';

export const getCurrentUser = () => {
  return new Promise((resolve, reject) => {
    const unsubscribe = auth.onAuthStateChanged(userAuth => {
      unsubscribe();
      resolve(userAuth);
    }, reject);
  });
};
export const googleProvider = new firebase.auth.GoogleAuthProvider();
googleProvider.setCustomParameters({ prompt: 'select_account' });
export const facebookProvider = new firebase.auth.FacebookAuthProvider();
export const githubProvider = new firebase.auth.GithubAuthProvider();
export const twitterProvider = new firebase.auth.TwitterAuthProvider();
export const signInWithGoogle = () => auth.signInWithPopup(googleProvider);
export const signInWithFacebook = () =>
  auth
    .signInWithPopup(facebookProvider)
    .then(function(result) {
      // This gives you a Facebook Access Token. You can use it to access the Facebook API.
      var token = result.credential.accessToken;
      // The signed-in user info.
      var user = result.user;
      console.log(`FB Token: ${token}`, `User: ${user}`);

      // ...
    })
    .catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      // The email of the user's account used.
      var email = error.email;
      // The firebase.auth.AuthCredential type that was used.
      var credential = error.credential;
      console.error(error);

      // ...
    });
export const signInWithGithub = () => auth.signInWithPopup(githubProvider);
export const signInWithTwitter = () => auth.signInWithPopup(twitterProvider);
export const signInWithEmail = async (email, password) =>
  await auth.signInWithEmailAndPassword(email, password);
export const signUpWithEmailAndPassword = async (email, password) =>
  await auth.createUserWithEmailAndPassword(email, password);

export const resetPassword = email => auth.sendPasswordResetEmail(email);

export const signOut = () => auth.signOut();
export default auth;
// async function signup(provider, info) {
//   if (!this.isValid) {
//     return;
//   }
//   try {
//     switch (provider) {
//       case this.EMAIL:
//         return await firebaseAuth().createUserWithEmailAndPassword(
//           info.email,
//           info.password
//         );
//       default:
//     }
//   } catch (error) {
//     return error;
//   }
// }

async function login(provider, info) {
  try {
    switch (provider) {
      case this.EMAIL:
        return await firebaseAuth().signInWithEmailAndPassword(
          info.email,
          info.password
        );
      case this.FACEBOOK:
        let fbAuthProvider = new firebaseAuth.FacebookAuthProvider();
        return await firebaseAuth().signInWithPopup(fbAuthProvider);
      case this.GOOGLE:
        let googleAuthProvider = new firebaseAuth.GoogleAuthProvider();
        return await firebaseAuth().signInWithPopup(googleAuthProvider);
      case this.GITHUB:
        let ghAuthProvider = new firebaseAuth.GithubAuthProvider();
        return await firebaseAuth().signInWithPopup(ghAuthProvider);
      case this.TWITTER:
        let twitterAuthProvider = new firebaseAuth.TwitterAuthProvider();
        return await firebaseAuth().signInWithPopup(twitterAuthProvider);
      default:
    }
  } catch (error) {
    return error;
  }
}
