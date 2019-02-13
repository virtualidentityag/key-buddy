import firebase from 'firebase'
import 'firebase/firestore'

const config = {
    apiKey: "AIzaSyCUDuidzDz6TyX4KGoALjug-KX2jTfkIVI",
    authDomain: "key-buddy.firebaseapp.com",
    databaseURL: "https://key-buddy.firebaseio.com",
    projectId: "key-buddy",
    storageBucket: "key-buddy.appspot.com",
    messagingSenderId: "505377396802"
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