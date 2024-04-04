// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAIxpnErqYWMQdxS_cB63ejKf67HyYeyPs",
  authDomain: "dragon-news-portal-auth-de687.firebaseapp.com",
  projectId: "dragon-news-portal-auth-de687",
  storageBucket: "dragon-news-portal-auth-de687.appspot.com",
  messagingSenderId: "1098696149223",
  appId: "1:1098696149223:web:07208b6771497b7c573a42"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app