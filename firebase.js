// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBuaVdH4J1pdgbsS0Py6Uepa3m4lUwrVMs",
  authDomain: "notes-1dddd.firebaseapp.com",
  projectId: "notes-1dddd",
  storageBucket: "notes-1dddd.appspot.com",
  messagingSenderId: "209260997854",
  appId: "1:209260997854:web:a9f4f07ced6138abfaa64f",
  measurementId: "G-E8BCZV4YC2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);