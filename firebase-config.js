import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyCKcjuItiLjs7IE_zVUvsNmPVYNe1RwlCU",
  authDomain: "ethio-entrance-prepare.firebaseapp.com",
  projectId: "ethio-entrance-prepare",
  storageBucket: "ethio-entrance-prepare.firebasestorage.app",
  messagingSenderId: "56148954609",
  appId: "1:56148954609:web:ed61e985126a04fcc80850",
  measurementId: "G-P33HNKK1RY"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
