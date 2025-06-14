// src/firebase.js

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyAVJLVkPA4XbKbd9-E1m5z1BV4gYEf_YlE",
  authDomain: "backbone-d3894.firebaseapp.com",
  projectId: "backbone-d3894",
  storageBucket: "backbone-d3894.appspot.com",  // ✅ fixed here
  messagingSenderId: "882861890014",
  appId: "1:882861890014:web:d8a11445b98eef7a9da54f",
  measurementId: "G-7K045G0GJM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);  // ✅ export auth for use in Login/Signup
export default app;
