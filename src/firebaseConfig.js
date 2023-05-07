import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAzGt0dos8yuBtKrbi4u3Q4H0g5vQQEsY4",
  authDomain: "login-c49f1.firebaseapp.com",
  projectId: "login-c49f1",
  storageBucket: "login-c49f1.appspot.com",
  messagingSenderId: "295759297240",
  appId: "1:295759297240:web:f3c4125fce5754af99f5ad"
  };

  const app = initializeApp(firebaseConfig);

  export const storage = getStorage(app);
  export const db = getFirestore(app);
  export const auth = getAuth(app);