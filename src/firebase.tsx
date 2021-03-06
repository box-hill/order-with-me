// import firebase from "firebase/compat/app";
import { initializeApp } from 'firebase/app';



const { REACT_APP_FIREBASE_API, REACT_APP_FIREBASE_AUTHDOMAIN, REACT_APP_FIREBASE_DATABASE_URL, REACT_APP_FIREBASE_PROJECTID, REACT_APP_FIREBASE_STORAGEBUCKET, REACT_APP_FIREBASE_MESSAGINGSENDERID, REACT_APP_FIREBASE_APPID } = process.env;

const firebaseConfig = {
    apiKey: REACT_APP_FIREBASE_API,
    authDomain: REACT_APP_FIREBASE_AUTHDOMAIN,
    databaseURL: REACT_APP_FIREBASE_DATABASE_URL,
    projectId: REACT_APP_FIREBASE_PROJECTID,
    storageBucket: REACT_APP_FIREBASE_STORAGEBUCKET,
    messagingSenderId: REACT_APP_FIREBASE_MESSAGINGSENDERID,
    appId: REACT_APP_FIREBASE_APPID
};

// firebase.initializeApp(firebaseConfig);
const app = initializeApp(firebaseConfig);

export default app;

// export default firebase;