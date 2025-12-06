// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

// --- IMPORTANT: PASTE YOUR FIREBASE CONFIGURATION HERE ---
// TODO: Replace with your app's Firebase project configuration
// For security, consider using environment variables
const firebaseConfig = {
  apiKey: "AIzaSyC8-w_aooDp_FzHMr26aPhKf2JraZX6_nY",
  authDomain: "netflix-clone-d3f13.firebaseapp.com",
  databaseURL: "https://netflix-clone-d3f13-default-rtdb.firebaseio.com",
  projectId: "netflix-clone-d3f13",
  storageBucket: "netflix-clone-d3f13.appspot.com",
  messagingSenderId: "766991412181",
  appId: "1:766991412181:web:3f642d2e0d0d5f1f8beb5c",
  measurementId: "G-P3M7FK8RE4",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);
