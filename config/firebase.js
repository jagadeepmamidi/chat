
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { Constants } from "expo-constants"; 

const firebaseConfig = {
  apiKey: "AIzaSyBI5ZRMGiCz-SII_IaI8OtRBEuiBUa2RUE",
  authDomain: "chatapp-3793e.firebaseapp.com",
  projectId: "chatapp-3793e",
  storageBucket: "chatapp-3793e.appspot.com",
  messagingSenderId: "472289996953",
  appId: "1:472289996953:web:7fa468624bfe549dde0808"
};


initializeApp(firebaseConfig);
export const auth = getAuth();
export const database =  getFirestore();