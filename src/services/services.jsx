// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDJzULgceeDWx1Atiu5wBx47TFk0dEpHLQ",
  authDomain: "auditorias-f7a85.firebaseapp.com",
  databaseURL: "https://auditorias-f7a85.firebaseio.com",
  projectId: "auditorias-f7a85",
  storageBucket: "auditorias-f7a85.appspot.com",
  messagingSenderId: "727474619185",
  appId: "1:727474619185:web:9b7e2c39bc8223c577e610"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db; 