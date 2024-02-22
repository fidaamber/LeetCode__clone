import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDESkL7KRFw4ezQTC59GjN_cTfg5vKyPgI",
    authDomain: "leet-af892.firebaseapp.com",
    projectId: "leet-af892",
    storageBucket: "leet-af892.appspot.com",
    messagingSenderId: "191733710069",
    appId: "1:191733710069:web:2de13e8eafef300e6199bc",
    measurementId: "G-FTLLGD07S9"
};

const app = !getApps.length ? initializeApp(firebaseConfig) : getApp();

const auth = getAuth(app);
const firestore = getFirestore(app);

export { auth, firestore, app };