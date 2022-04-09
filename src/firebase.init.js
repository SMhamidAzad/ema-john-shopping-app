// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD3AZUL79lRgI-1m6CxL_Kzk6hROLrKxx4",
  authDomain: "ema-john-simple-8aca9.firebaseapp.com",
  projectId: "ema-john-simple-8aca9",
  storageBucket: "ema-john-simple-8aca9.appspot.com",
  messagingSenderId: "805490518279",
  appId: "1:805490518279:web:9dc6fa4f173af714067da2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;