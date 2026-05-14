import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyBqDrfgKxeECHPLTzjcHetZJbgG_4_D0d8",
    authDomain: "listacompras3b2026.firebaseapp.com",
    projectId: "listacompras3b2026",
    storageBucket: "listacompras3b2026.firebasestorage.app",
    messagingSenderId: "915910034865",
    appId: "1:915910034865:web:47b6c9de1c49ba5a406990",
    measurementId: "G-RGHHT4MHZ4"
};

export const firebase = initializeApp(firebaseConfig);
export const firestore = getFirestore(firebase)