// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCqLVIbF_cbC2xpA19yveUYNqNrD0nOwRA",
  authDomain: "danistir-ed375.firebaseapp.com",
  projectId: "danistir-ed375",
  storageBucket: "danistir-ed375.appspot.com",
  messagingSenderId: "988976336662",
  appId: "1:988976336662:web:b22eb751a28cb2c9620a37",
  measurementId: "G-NNGM3KE2K7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
