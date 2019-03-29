import firebase from 'firebase'
import 'firebase/firestore'

const config = {
    apiKey: "AIzaSyDp-rzeNuhUDyKhojsxPblJX5h7FQGaI4o",
    authDomain: "keybuddy-e2825.firebaseapp.com",
    databaseURL: "https://keybuddy-e2825.firebaseio.com",
    projectId: "keybuddy-e2825",
    storageBucket: "keybuddy-e2825.appspot.com",
	messagingSenderId: "140535794289",
	publicVapidKey: "BHnsAdd4S-cSl2ABKAwZ6eRrUMjLTUj_FU8MAc-hhI8jJxl9MGVyQuRUCosCWJeilS2aO0VFK8nAJxht1yb56_U"
};

firebase.initializeApp(config);

// firebase utils
const db = firebase.firestore();
const auth = firebase.auth();
const currentUser = auth.currentUser;
const messaging = firebase.messaging();
messaging.usePublicVapidKey(config.publicVapidKey);

const userCollection = db.collection('user');
const officeCollection = db.collection('office');

export {
    db,
	auth,
	messaging,
    currentUser,
    userCollection,
    officeCollection
}