import firebase from 'firebase';
import ReduxSagaFirebase from 'redux-saga-firebase';
import 'firebase/firestore';
import firebaseConfig from '@iso/config/firebase.config';

const valid =
  firebaseConfig && firebaseConfig.apiKey && firebaseConfig.projectId
    ? true
    : false;

const firebaseApp =
  valid && !firebase.apps.length && firebase.initializeApp(firebaseConfig);
const firebaseAuth = valid && firebase.auth;
class FirebaseHelper {
  isValid = valid;
  EMAIL = 'email';
  FACEBOOK = 'facebook';
  GOOGLE = 'google';
  GITHUB = 'github';
  TWITTER = 'twitter';

  constructor() {
    this.login = this.login.bind(this);
    this.logout = this.logout.bind(this);
    this.isAuthenticated = this.isAuthenticated.bind(this);
    this.database = this.isValid && firebase.firestore();

    this.rsf =
      this.isValid && new ReduxSagaFirebase(firebaseApp, firebase.firestore());
    this.rsfFirestore = this.isValid && this.rsf.firestore;
  }

  createBatch = () => {
    return this.database.batch();
  };

  async signup(provider, info) {
    if (!this.isValid) {
      return;
    }
    try {
      switch (provider) {
        case this.EMAIL:
          return await firebaseAuth().createUserWithEmailAndPassword(
            info.email,
            info.password
          );
        default:
      }
    } catch (error) {
      return error;
    }
  }

  async login(provider, info) {
    if (!this.isValid) {
      return;
    }
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

  logout() {
    return firebaseAuth().signOut();
  }

  isAuthenticated() {
    firebaseAuth().onAuthStateChanged(user => {
      return user ? true : false;
    });
  }
  resetPassword(email) {
    return firebaseAuth().sendPasswordResetEmail(email);
  }
  createNewRef() {
    return firebase
      .database()
      .ref()
      .push().key;
  }
  processFireStoreCollection(snapshot) {
    let data = {};
    snapshot.forEach(doc => {
      data = {
        ...data,
        [doc.id]: doc.data(),
      };
    });
    return data;
  }
}

export default new FirebaseHelper();
