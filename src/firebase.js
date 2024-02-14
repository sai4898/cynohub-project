import firebase from 'firebase/app'
import 'firebase/auth'
import { initializeApp } from 'firebase/app';
import { getAuth } from "firebase/auth";
var firebaseConfig = {
    apiKey: "AIzaSyA0WotHbI3NzQ9sqh9cqPgJKACzObeTtL0",
  authDomain: "phn-otp-3d121.firebaseapp.com",
  projectId: "phn-otp-3d121",
  storageBucket: "phn-otp-3d121.appspot.com",
  messagingSenderId: "1057135602414",
  appId: "1:1057135602414:web:7386abf708cdb2f75c21ff"
  };
  // Initialize Firebase
//   const firebaseApp = initializeApp(firebaseConfig);

// export default firebaseApp;

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);