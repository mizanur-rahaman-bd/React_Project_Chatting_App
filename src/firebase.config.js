// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBo4UuKoZ9h2QQtos_b7w2Q73BXCPrmCSQ",
  authDomain: "gracias-51afc.firebaseapp.com",
  projectId: "gracias-51afc",
  storageBucket: "gracias-51afc.firebasestorage.app",
  messagingSenderId: "630646231224",
  appId: "1:630646231224:web:0e2a3c8111db4c21ec644d",
  measurementId: "G-CZBY06G58J"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app