import firebase from 'firebase'
import 'firebase/firestore'

const config = {
    apiKey: "test",
    authDomain: "",
    databaseURL: "",
    projectId: "",
    storageBucket: "",
    messagingSenderId: ""
};

firebase.initializeApp(config);

// firebase utils
const db = firebase.firestore();
const auth = firebase.auth();
const currentUser = auth.currentUser;

const usersCollection = db.collection('users');
const keyCollection = db.collection('keys');
const userInOfficeCollection = db.collection('userIo');

export {
    db,
    auth,
    currentUser,
    usersCollection,
    keyCollection,
    userInOfficeCollection
}