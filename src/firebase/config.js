import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/storage";

var firebaseConfig = {
  apiKey: "AIzaSyCaJs1kNgVFB-9Hb60MRUk63SpRJdnKi-U",
  authDomain: "postit-ca766.firebaseapp.com",
  projectId: "postit-ca766",
  storageBucket: "postit-ca766.appspot.com",
  messagingSenderId: "616390998740",
  appId: "1:616390998740:web:5c495d9495fdbb6b65d941",
  measurementId: "G-NJH5QE7ZTP",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const firebaseStorage = firebase.storage();
const firestore = firebase.firestore();

export { firebaseStorage, firestore };
