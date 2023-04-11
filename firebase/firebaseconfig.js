// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage, ref } from "firebase/storage";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const storage = getStorage();
const storageRef = ref(storage);

const firebaseConfig = {
  apiKey: "AIzaSyABDyflDRNkHlpB9wOztoe_LTVwYxMLpyk",
  authDomain: "portfolio-site-11982.firebaseapp.com",
  projectId: "portfolio-site-11982",
  storageBucket: "portfolio-site-11982.appspot.com",
  messagingSenderId: "8267460182",
  appId: "1:8267460182:web:9877ec7970a170bf0e15f7",
  measurementId: "G-V7WRX57P66",
};

initializeApp(firebaseConfig);
