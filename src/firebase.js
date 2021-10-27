// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase'


const firebaseConfig = {
  apiKey: "AIzaSyAeZy9JT99Xe6dkC4ITTq43194v4XU7ADk",
  authDomain: "clone-560d8.firebaseapp.com",
  projectId: "clone-560d8",
  storageBucket: "clone-560d8.appspot.com",
  messagingSenderId: "165900503123",
  appId: "1:165900503123:web:a0642bf64ab76c360a9ea6",
  measurementId: "G-67NPWPCK7N"
};

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig)

const db = firebaseApp.firestore()
const auth = firebase.auth()

export {db,auth}