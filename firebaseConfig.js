import config from "./config";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: config.REACT_APP_FIREBASE_APIKEY,
    authDomain: "mvp-01-2a492.firebaseapp.com",
    projectId: "mvp-01-2a492",
    storageBucket: "mvp-01-2a492.appspot.com",
    messagingSenderId: config.REACT_APP_FIREBASE_MESSAGINGSENDERID,
    appId: config.REACT_APP_FIREBASE_APPID,
    measurementId: config.REACT_APP_FIREBASE_MEASUREMENTId
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);