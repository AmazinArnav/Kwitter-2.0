



// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries



// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAPkQQwOLCtceLYXclBTFUAMZU3Dpx07A8",
  authDomain: "kwitter20-835f3.firebaseapp.com",
  projectId: "kwitter20-835f3",
  storageBucket: "kwitter20-835f3.appspot.com",
  messagingSenderId: "533738211094",
  appId: "1:533738211094:web:4945fffde81cddd7e1b237",
  measurementId: "G-R64TS5KZ7M"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);