// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

// Initialize Firebas

export const getFirebaseApp = () =>{
    const firebaseConfig = {
        apiKey: "AIzaSyCCZ-MEDO_HIvEEDblAglHQIcphvkgB5c4",
        authDomain: "whatsapp-54804.firebaseapp.com",
        projectId: "whatsapp-54804",
        storageBucket: "whatsapp-54804.appspot.com",
        messagingSenderId: "677140972109",
        appId: "1:677140972109:web:e79fa978cdeed7633b9204",
        measurementId: "G-8P5DQS7KPW"
      };
      
      // Initialize Firebase
      return initializeApp(firebaseConfig);
}