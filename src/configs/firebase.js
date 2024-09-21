import { getAuth } from "@firebase/auth";
import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAnalytics } from "firebase/analytics";

// TODO: Replace the following with your app's Firebase project configuration
// See: https://support.google.com/firebase/answer/7015592
const firebaseConfig = {
    apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
    authDomain: process.env.AUTH_DOMAIN,
    projectId: process.env.PROJECT_ID,
    storageBucket: process.env.STORAGE_BUCKET,
    messagingSenderId: process.env.MESSAGING_SENDER_ID,
    appId: process.env.APP_ID,
    measurementId: process.env.MESUREMENT_ID
  };

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();


// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);

export default db;
export const storage = getStorage(app);
export const auth = getAuth(app) 