import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

type DocumentSnapshot = firebase.firestore.DocumentSnapshot;

const config = {
  apiKey: 'AIzaSyCTIhySeXpXUK6WP9UnJvs2_wZxBJ3lmlA',
  authDomain: 'cwrn-db-7bc7a.firebaseapp.com',
  databaseURL: 'https://cwrn-db-7bc7a.firebaseio.com',
  projectId: 'cwrn-db-7bc7a',
  storageBucket: 'cwrn-db-7bc7a.appspot.com',
  messagingSenderId: '264760330130',
  appId: '1:264760330130:web:67e6c0046724b49412634b',
  measurementId: 'G-P25Q0XMZ2P'
};
// Initialize Firebase
firebase.initializeApp(config);

export const createUserProfileDocument = async (userAuth: any, additionalData: any) => {
	if (!userAuth) return;

	const userRef = firestore.doc(`users/${userAuth.uid}`)
	const snapshot = await userRef.get();

	if (!snapshot.exists) {
		const {displayName, email} = userAuth;
		const createdAt = new Date();
		try {
			await userRef.set({
				displayName,
				email,
				createdAt,
				...additionalData
			})
		} catch(error) {
			console.error('error creating user', error.message)
		}
	}

	return userRef;
}
export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({
  prompt: 'select_account'
});

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
