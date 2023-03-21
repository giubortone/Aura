// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA3MUF2_etswvADzh7oZJwKdWko0JzDNzQ",
  authDomain: "aura-9357d.firebaseapp.com",
  projectId: "aura-9357d",
  storageBucket: "aura-9357d.appspot.com",
  messagingSenderId: "819196767588",
  appId: "1:819196767588:web:6d4e881a451b68455bde71",
  measurementId: "G-W9JBHHY45Z"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);