import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// Configuración de Firebase
const firebaseConfig = {
    apiKey: "AIzaSyD9DJv9r8jOC_kSZTmvNJ-x4kf1XLHqsx4",
    authDomain: "viajaporargentina-f19a4.firebaseapp.com",
    projectId: "viajaporargentina-f19a4",
    storageBucket: "viajaporargentina-f19a4.firebasestorage.app",
    messagingSenderId: "1043876214354",
    appId: "1:1043876214354:web:3fed437c30532befced18b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)
const auth = getAuth(app)
export { db, auth }