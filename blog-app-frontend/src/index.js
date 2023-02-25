import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { initializeApp } from "firebase/app";



// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCX02sIIGSdXRWdnoyItR4I3xDdFy5MrOU",
  authDomain: "blog-app-cef26.firebaseapp.com",
  projectId: "blog-app-cef26",
  storageBucket: "blog-app-cef26.appspot.com",
  messagingSenderId: "955288986382",
  appId: "1:955288986382:web:992e4d354ebc0049e02d5f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


