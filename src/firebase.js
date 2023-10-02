import { initializeApp } from "firebase/app";
import { getAuth, connectAuthEmulator } from "firebase/auth";
import { getFirestore, connectFirestoreEmulator } from "firebase/firestore";
import { getFunctions, connectFunctionsEmulator } from "firebase/functions";

const firebaseConfig = {
  apiKey: "AIzaSyAm55S-vvvIsDwkZaLAJAhvv6pzevckaBU",
  authDomain: "tma-sdc.firebaseapp.com",
  projectId: "tma-sdc",
  storageBucket: "tma-sdc.appspot.com",
  messagingSenderId: "519584645132",
  appId: "1:519584645132:web:f51108db7d94f7b0c0ae29",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const fbFunctions = getFunctions(app);

if (process.env.NODE_ENV === "development") {
  connectAuthEmulator(auth, "http://localhost:9099");
  connectFirestoreEmulator(db, "localhost", 8080);
  connectFunctionsEmulator(fbFunctions, "localhost", 5001);
}
