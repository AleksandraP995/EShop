import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyA8ySP6zCmhjdy7_TBbvx6a6pBzYkpvWUo",
    authDomain: "eshop-b0436.firebaseapp.com",
    projectId: "eshop-b0436",
    storageBucket: "eshop-b0436.appspot.com",
    messagingSenderId: "667912351103",
    appId: "1:667912351103:web:88bf9277dce01dfe467e4a",
    measurementId: "G-ZDJWPK28XE"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export { db, auth };