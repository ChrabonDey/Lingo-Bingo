// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth}from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDHG_25dsKXxsv0_jsFmLKbL7D6Us9oyzA",
  authDomain: "lingo-bingo-40909.firebaseapp.com",
  projectId: "lingo-bingo-40909",
  storageBucket: "lingo-bingo-40909.firebasestorage.app",
  messagingSenderId: "44097564960",
  appId: "1:44097564960:web:442b9cb9f743ebb3442745"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth=getAuth(app)
export default auth;