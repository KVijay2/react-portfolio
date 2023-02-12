import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { getStorage } from 'firebase/storage';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDz6CoJamy23E4tUgEsiFT6G8qFNc1ggOI",
  authDomain: "react-portfolio-dashboard-2008.firebaseapp.com",
  projectId: "react-portfolio-dashboard-2008",
  storageBucket: "react-portfolio-dashboard-2008.appspot.com",
  messagingSenderId: "787154224958",
  appId: "1:787154224958:web:4411543c4d3fa9fab04e6f"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth();
const provider = new GoogleAuthProvider();
export const db = getFirestore(app);
export const storage = getStorage(app);

export const signInWithGoogle = () => signInWithPopup(auth, provider);