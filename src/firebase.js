import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCSAp9NZQoFTy1-z4zrzMELNewXOgCt_ZY",
  authDomain: "challenge-40e50.firebaseapp.com",
  projectId: "challenge-40e50",
  storageBucket: "challenge-40e50.appspot.com",
  messagingSenderId: "499513070702",
  appId: "1:499513070702:web:20465f7bd931942012c27f",
  measurementId: "G-LZS6JGEYZ6"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db =  firebaseApp.firestore();
const auth = firebase.auth();

export {db, auth};