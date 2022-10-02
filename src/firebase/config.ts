// Import the functions you need from the SDKs you need
import { getAnalytics } from "firebase/analytics";
import { initializeApp } from "firebase/app";
import { connectAuthEmulator, getAuth } from "firebase/auth";
import { connectFirestoreEmulator, getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDp3d33Lzl2sQEGV_CKcFrlOVXki69q-54",
  authDomain: "f8clone-2b8fc.firebaseapp.com",
  projectId: "f8clone-2b8fc",
  storageBucket: "f8clone-2b8fc.appspot.com",
  messagingSenderId: "903089680421",
  appId: "1:903089680421:web:f543bfef6470ae53c2cfcc",
  measurementId: "G-FC7FCQHZLL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
const db = getFirestore(app);
// connectAuthEmulator(auth, "http://localhost:9099");
// connectFirestoreEmulator(db, 'localhost', 8080);