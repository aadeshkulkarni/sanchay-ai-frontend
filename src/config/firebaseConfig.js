// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth ,GoogleAuthProvider} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCvYL65rcMdK91Gq1aOuKB7YbXl_tcCdIc",
  authDomain: "opensource-2e280.firebaseapp.com",
  projectId: "opensource-2e280",
  storageBucket: "opensource-2e280.appspot.com",
  messagingSenderId: "184191572877",
  appId: "1:184191572877:web:0e036b988f4c9eb9b5fbc4",
  measurementId: "G-65H34VYH78"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth=getAuth(app);
export const provider= new GoogleAuthProvider(app);