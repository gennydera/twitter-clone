// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import firebase from "firebase";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBbmiDEGcnOKckEYlhxHDAY_cEYWb-CiEk",
    authDomain: "twitter-clone-f52fc.firebaseapp.com",
    projectId: "twitter-clone-f52fc",
    storageBucket: "twitter-clone-f52fc.appspot.com",
    messagingSenderId: "804648321502",
    appId: "1:804648321502:web:81fb567a9c72eb78205d4f",
    measurementId: "G-VR3L0PP4HB"
  };

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
// const analytics = getAnalytics(firebaseApp);

const db = firebaseApp.firestore();

export default db;