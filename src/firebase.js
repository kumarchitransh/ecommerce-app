import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCvr196IrUZGn0vwL87I6dM6SuoCPCUBPA",
  authDomain: "ecommerce-app-219d5.firebaseapp.com",
  projectId: "ecommerce-app-219d5",
  storageBucket: "ecommerce-app-219d5.appspot.com",
  messagingSenderId: "378816998956",
  appId: "1:378816998956:web:650afc0e2cc340e0e46b89",
  measurementId: "G-0NLPDE7GGV",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
