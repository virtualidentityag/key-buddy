import firebase from 'firebase'
import 'firebase/firestore'

const config = {
    apiKey: "AIzaSyDp-rzeNuhUDyKhojsxPblJX5h7FQGaI4o",
    authDomain: "keybuddy-e2825.firebaseapp.com",
    databaseURL: "https://keybuddy-e2825.firebaseio.com",
    projectId: "keybuddy-e2825",
    storageBucket: "keybuddy-e2825.appspot.com",
    messagingSenderId: "140535794289"
};

firebase.initializeApp(config);

// firebase utils
const db = firebase.firestore();
const auth = firebase.auth();
const currentUser = auth.currentUser;

const userCollection = db.collection('user');
const officeCollection = db.collection('office');

export {
    db,
    auth,
    currentUser,
    userCollection,
    officeCollection
}