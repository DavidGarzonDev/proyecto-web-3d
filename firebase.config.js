// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDkakYTLPHhVEZCcJQ8-0ST1uBHxdqJKG4",
  authDomain: "proyectoweb3d-128d5.firebaseapp.com",
  projectId: "proyectoweb3d-128d5",
  storageBucket: "proyectoweb3d-128d5.firebasestorage.app",
  messagingSenderId: "751333931756",
  appId: "1:751333931756:web:30db71c1154c49a46cc3c9",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export { app, db, auth };