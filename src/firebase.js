import { initializeApp } from "firebase/app";
import { getStorage } from 'firebase/storage'

const firebaseConfig = {
  apiKey: "AIzaSyBT4mCkn2WaTtJrTq47r1yYeNiu3eYkGzs",
  authDomain: "danistirpp.firebaseapp.com",
  projectId: "danistirpp",
  storageBucket: "danistirpp.appspot.com",
  messagingSenderId: "206595066893",
  appId: "1:206595066893:web:ab23a41e18846df45c9944"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app)