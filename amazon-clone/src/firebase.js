import '@firebase/auth';
import { firebase } from '@firebase/app';
import '@firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyAEbr0IpIan8eRPyNXRM4A0VTuiB_UpeDM",
    authDomain: "challenge-907aa.firebaseapp.com",
    projectId: "challenge-907aa",
    storageBucket: "challenge-907aa.appspot.com",
    messagingSenderId: "265064891846",
    appId: "1:265064891846:web:58fdacdcf41a3279f9dec7"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
