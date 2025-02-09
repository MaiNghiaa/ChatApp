import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { connectFirestoreEmulator, getFirestore } from "firebase/firestore";
import { connectAuthEmulator, getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCLfhgca9tQpLd-Ff8xjGcDMA22Kf8zN6o",
  authDomain: "chat-app-a55eb.firebaseapp.com",
  projectId: "chat-app-a55eb",
  storageBucket: "chat-app-a55eb.appspot.com",
  messagingSenderId: "850469306690",
  appId: "1:850469306690:web:b470a645988d2505cac8db",
  measurementId: "G-5JFDXWG45B",
};
const app = initializeApp(firebaseConfig);

const analytics = getAnalytics(app);

const db = getFirestore(app);

if (window.location.hostname === "localhost") {
  connectFirestoreEmulator(db, "127.0.0.1", 8080);
}

const auth = getAuth(app);

if (window.location.hostname === "localhost") {
  connectAuthEmulator(auth, "http://127.0.0.1:9099");
}

export { app, analytics, auth, db };
