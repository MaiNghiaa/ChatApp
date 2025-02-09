import { addDoc, collection } from "firebase/firestore";
import { db } from "./config";

export const addDocument = async (collect, data) => {
  try {
    await addDoc(collection(db, collect), data);
    console.log("User added to Firestore!");
  } catch (error) {
    console.error("Error adding document:", error);
  }
};
