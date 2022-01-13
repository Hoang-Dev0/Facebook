// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBf_7wdOvBOl4zwqB_OvoLxHsYQjzLkXD0",
  authDomain: "login-79313.firebaseapp.com",
  projectId: "login-79313",
  storageBucket: "login-79313.appspot.com",
  messagingSenderId: "816700769108",
  appId: "1:816700769108:web:89a79bdc41c68f758bbec1",
  measurementId: "G-2LXE1M7LDG"
  databaseURL: "https://login-79313-default-rtdb.firebaseio.com/"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);