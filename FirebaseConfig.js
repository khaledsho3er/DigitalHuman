// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyDLQ23VwRa5BXm2P0vbFsVAeYSWtGoOMSY",
  authDomain: "digital-human-408c8.firebaseapp.com",
  projectId: "digital-human-408c8",
  storageBucket: "digital-human-408c8.appspot.com",
  messagingSenderId: "684215466153",
  appId: "1:684215466153:web:d74b539bea7230876b51b8"
};

// Initialize Firebase
export const Firebase_app = initializeApp(firebaseConfig);
export const Firebase_Auth = getAuth(Firebase_app);
export const Firestore_Db= getFirestore(Firebase_Auth)