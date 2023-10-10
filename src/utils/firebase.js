// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCDaRDImxF9N1TnpaUmPCxsMXSku2tWsNI",
  authDomain: "netflix-gpt-sst.firebaseapp.com",
  projectId: "netflix-gpt-sst",
  storageBucket: "netflix-gpt-sst.appspot.com",
  messagingSenderId: "884946417676",
  appId: "1:884946417676:web:450559dcdb05ad62449629",
  measurementId: "G-1B8C9NCEBT",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
