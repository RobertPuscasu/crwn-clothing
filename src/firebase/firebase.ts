import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyD8vq6nj_O0SlIocArj4ujEuKtKEKPgk6Y',
  authDomain: 'cwrn-db-a28cb.firebaseapp.com',
  databaseURL: 'https://cwrn-db-a28cb.firebaseio.com',
  projectId: 'cwrn-db-a28cb',
  storageBucket: 'cwrn-db-a28cb.appspot.com',
  messagingSenderId: '507720891347',
  appId: '1:507720891347:web:548a4b2d89907e195f8d26',
  measurementId: 'G-KZJBLX8S40'
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

 const provider = new firebase.auth.GoogleAuthProvider();
 provider.setCustomParameters({
	 prompt: 'select_account'
 });

 export const signInWithGoogle = () => auth.signInWithPopup(provider)

 export default firebase;