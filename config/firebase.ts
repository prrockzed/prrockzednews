import { initializeApp } from "firebase/app";
import { FIREBASE_API_KEY } from "./apiKey";
import { getAuth } from "firebase/auth";

const firebaseapikey = FIREBASE_API_KEY;
const firebaseConfig = {
  apiKey: firebaseapikey,
  authDomain: "prrockzednews.firebaseapp.com",
  projectId: "prrockzednews",
  storageBucket: "prrockzednews.appspot.com",
  messagingSenderId: "383166514439",
  appId: "1:383166514439:web:39e5944a099f5fbc8a71a2",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth();
