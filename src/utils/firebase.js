import { getAuth } from "firebase/auth";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD3WWyjrBsUqA1dXYGAGprgtP48A2smf9w",
  authDomain: "netflix-gpt-cf634.firebaseapp.com",
  projectId: "netflix-gpt-cf634",
  storageBucket: "netflix-gpt-cf634.firebasestorage.app",
  messagingSenderId: "896982926182",
  appId: "1:896982926182:web:3ef546bf707d13bdacfea7",
  measurementId: "G-ZBNLF6SG07",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
