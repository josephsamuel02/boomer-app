import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDxIzpsnltdN8XK5g7kv_PxS4N8M8AY6kc",
  authDomain: "boomer-666b3.firebaseapp.com",
  projectId: "boomer-666b3",
  storageBucket: "boomer-666b3.firebasestorage.app",
  messagingSenderId: "646858737285",
  appId: "1:646858737285:web:d1f40099b65c619063cbec",
  measurementId: "G-L3R5RHN594",
};
const app = initializeApp(firebaseConfig);

export const storage = getStorage(app);

export const db = getFirestore(app);
