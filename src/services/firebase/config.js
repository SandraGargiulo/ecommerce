// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyA-sreqG0v6l3NDgC30KUcL9AtQNnwI2Ic",
    authDomain: "dilgar-1a347.firebaseapp.com",
    databaseURL: "https://dilgar-1a347-default-rtdb.firebaseio.com",
    projectId: "dilgar-1a347",
    storageBucket: "dilgar-1a347.appspot.com",
    messagingSenderId: "581607243433",
    appId: "1:581607243433:web:8950665f0e98cd139033b8",
    measurementId: "G-NYDV6W5347"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig)
export const initFirebase =() => app