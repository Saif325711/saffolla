import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration from the user
const firebaseConfig = {
  apiKey: "AIzaSyAqwiYygPuWIKJp8oyhzS9J60jKl7_uUck",
  authDomain: "saffolla-1fcaa.firebaseapp.com",
  projectId: "saffolla-1fcaa",
  storageBucket: "saffolla-1fcaa.firebasestorage.app",
  messagingSenderId: "757264236617",
  appId: "1:757264236617:web:2354f9393b7b04f862bf98"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Services
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);

export default app;
