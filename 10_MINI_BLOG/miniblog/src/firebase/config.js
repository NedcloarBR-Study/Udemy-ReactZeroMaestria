// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_firebaseAPIKey,
  authDomain: import.meta.env.VITE_firebaseAuthDomain,
  projectId: import.meta.env.VITE_firebaseProjectId,
  storageBucket: import.meta.env.VITE_firebaseStorageBucket,
  messagingSenderId: import.meta.env.VITE_firebaseMessagingSenderId,
  appId: import.meta.env.VITE_firebaseAppId,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db };
