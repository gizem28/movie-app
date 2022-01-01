// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDp3stEPu9VRJLqjLOs-AqWm5KruR_yCgs",
  authDomain: "movie-app-748de.firebaseapp.com",
  projectId: "movie-app-748de",
  storageBucket: "movie-app-748de.appspot.com",
  messagingSenderId: "224949073638",
  appId: "1:224949073638:web:10284bb7437ad6421ded27"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);