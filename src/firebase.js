import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { getAuth } from "firebase/auth";

const firebaseConfig = {

    apiKey: "AIzaSyBJD83_ZloxXnPm7cO728yclfWt-7sMAvs",
  
    authDomain: "sigma-40a74.firebaseapp.com",
  
    projectId: "sigma-40a74",
  
    storageBucket: "sigma-40a74.appspot.com",
  
    messagingSenderId: "55878988171",
  
    appId: "1:55878988171:web:8f44b5b9b6165b6962bf8e",
  
    measurementId: "G-J9G403HBEL"
  
  };

const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);
export const auth = getAuth();
