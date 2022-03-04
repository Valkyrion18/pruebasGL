import { initializeApp } from 'firebase/app';
// import { GoogleAuthProvider } from "firebase/auth";
// import { FacebookAuthProvider } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyCZEQJK4xwOIKFYIVET821r3W-wg-_7mqU",
    authDomain: "pruebas-geo-11b7a.firebaseapp.com",
    projectId: "pruebas-geo-11b7a",
    storageBucket: "pruebas-geo-11b7a.appspot.com",
    messagingSenderId: "379401444058",
    appId: "1:379401444058:web:b87e80cc2f8d4d6d61e3e3"
  };

const app = initializeApp(firebaseConfig);
const db = getFirestore();
// const google =  new GoogleAuthProvider();
// const facebook = new FacebookAuthProvider();

export{
    app,
    db
    // google,
    // facebook
}