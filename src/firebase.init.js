// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCrZM4YOfU4VDizJcj5yZaWopRUMIltrAo",
  authDomain: "assi9-2a57f.firebaseapp.com",
  projectId: "assi9-2a57f",
  storageBucket: "assi9-2a57f.firebasestorage.app",
  messagingSenderId: "221505732876",
  appId: "1:221505732876:web:f67fa410daea0f94b00929"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);