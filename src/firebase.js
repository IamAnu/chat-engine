// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// Import the functions you need from the SDKs you need
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD0ugS1OtUCh2yL8qa7mBtLnR3eAVvIBRA",
  authDomain: "chat-ea2c1.firebaseapp.com",
  projectId: "chat-ea2c1",
  storageBucket: "chat-ea2c1.appspot.com",
  messagingSenderId: "539379880116",
  appId: "1:539379880116:web:20b1b303b7a15bfeb7c7e1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
// Create a root reference
export const storage = getStorage();
export const db = getFirestore();