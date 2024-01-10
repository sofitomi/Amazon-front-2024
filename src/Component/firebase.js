// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import {getAuth} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional


import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBF3RvHAhSM3kUz3rv0kUo_I-Ix6tpOeNk",
  authDomain: "fir-77edf.firebaseapp.com",
  projectId: "fir-77edf",
  storageBucket: "fir-77edf.appspot.com",
  messagingSenderId: "913766888753",
  appId: "1:913766888753:web:e2e4d36a38b6b756b7ec10",
  measurementId: "G-E3MXVKX8B7",
};

// Initialize Firebase


const app= firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = app.firestore();


export {auth,db};
