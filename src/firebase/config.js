import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/storage";
import "firebase/app-check";
const API_KEY = process.env.REACT_APP_FIREBASE_API;
const KEY = process.env.REACT_APP_SECRET_KEY;

var firebaseConfig = {
  apiKey: API_KEY,
  authDomain: "postit-ca766.firebaseapp.com",
  projectId: "postit-ca766",
  storageBucket: "postit-ca766.appspot.com",
  messagingSenderId: "616390998740",
  appId: "1:616390998740:web:5c495d9495fdbb6b65d941",
  measurementId: "G-NJH5QE7ZTP",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const appCheck = firebase.appCheck();
// Pass your reCAPTCHA v3 site key (public key) to activate(). Make sure this
// key is the counterpart to the secret key you set in the Firebase console.
appCheck.activate(
  "6LcjkEkcAAAAAP4-wgrhb0V5K-6NREXAofRw-8dQ",

  // Optional argument. If true, the SDK automatically refreshes App Check
  // tokens as needed.
  true
);

const firebaseStorage = firebase.storage();
const firestore = firebase.firestore();

export { firebaseStorage, firestore };
