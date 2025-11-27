import { db } from "../config/firebase.config.js";
import {
  collection,
  getDocs,
  getDoc,
  doc,
  addDoc,
  deleteDoc,
} from "firebase/firestore";

const productsCollection = collection(db, "products");

export const getAll = async () => {
  try {
    const snapshot = await getDocs(productsCollection);
    return snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
  } catch (error) {
    console.error("🔥 Error en getAll():", error);
    throw error;
  }
};

export const getById = async (id) => {
  try {
    const ref = doc(db, "products", id);
    const snapshot = await getDoc(ref);

    if (!snapshot.exists()) return null;
    return { id: snapshot.id, ...snapshot.data() };
  } catch (error) {
    console.error("🔥 Error en getById():", error);
    throw error;
  }
};


export const create = async (data) => {
  try {
    const newProduct = await addDoc(productsCollection, data);
    return { id: newProduct.id, ...data };
  } catch (error) {
    console.error("🔥 Error en create():", error);
    throw error;
  }
};

export const remove = async (id) => {
  try {
    const ref = doc(db, "products", id);
    await deleteDoc(ref);
    return true;
  } catch (error) {
    console.error("🔥 Error en remove():", error);
    throw error;
  }
};

