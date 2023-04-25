// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDYf87cHD1yv1dkJXCQkGnT00Lw1FxCwzw",
  authDomain: "blogapp-bad33.firebaseapp.com",
  projectId: "blogapp-bad33",
  storageBucket: "blogapp-bad33.appspot.com",
  messagingSenderId: "1064984786933",
  appId: "1:1064984786933:web:db24144890fb672c4412bc",
  measurementId: "G-DPNHYF85CW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);