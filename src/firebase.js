// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";

import { getAnalytics } from "firebase/analytics";

import { getDatabase } from "firebase/database";

import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration

// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {

  apiKey: "AIzaSyBJD83_ZloxXnPm7cO728yclfWt-7sMAvs",

  authDomain: "sigma-40a74.firebaseapp.com",

  databaseURL: "https://sigma-40a74-default-rtdb.firebaseio.com",

  projectId: "sigma-40a74",

  storageBucket: "sigma-40a74.appspot.com",

  messagingSenderId: "55878988171",

  appId: "1:55878988171:web:8f44b5b9b6165b6962bf8e",

  measurementId: "G-J9G403HBEL"

};


// Initialize Firebase

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const db = getDatabase(app);
export const auth = getAuth();