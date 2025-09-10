// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: "AIzaSyC-Mli3O0mI_c1DLER_l0iaMtNG4xtAiec",
  authDomain: "react-efc65.firebaseapp.com",
  projectId: "react-efc65",
  storageBucket: "react-efc65.firebasestorage.app",
  messagingSenderId: "474384883002",
  appId: "1:474384883002:web:15831937144cf014f18403",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
