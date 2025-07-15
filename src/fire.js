// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBTNaq1LXPmTa2PCIv0bQMz5Flt1FQaP34",
  authDomain: "cinephilia-8100c.firebaseapp.com",
  projectId: "cinephilia-8100c",
  storageBucket: "cinephilia-8100c.firebasestorage.app",
  messagingSenderId: "51313021445",
  appId: "1:51313021445:web:8f4a9007085a302f0a026c",
  measurementId: "G-C317RBKNPQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);