import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
const firebaseConfig = {
    apiKey: "AIzaSyCLu0njjLQKsMTGY_JY4Oe5PMBa1E7x_80",
    authDomain: "authentication-page-c5030.firebaseapp.com",
    projectId: "authentication-page-c5030",
    storageBucket: "authentication-page-c5030.appspot.com",
    messagingSenderId: "636079147166",
    appId: "1:636079147166:web:688fed6f87e627c1dfd38f",
    measurementId: "G-V1Q7N3KX2C"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);