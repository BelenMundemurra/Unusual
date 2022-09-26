// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDdonQxnOkoxDqvFpZtV2c7iE85RZ6b5qQ",
    authDomain: "ecommerce-react---coderhouse.firebaseapp.com",
    projectId: "ecommerce-react---coderhouse",
    storageBucket: "ecommerce-react---coderhouse.appspot.com",
    messagingSenderId: "1012296411034",
    appId: "1:1012296411034:web:25c58a78c1b1308e66bc23"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)