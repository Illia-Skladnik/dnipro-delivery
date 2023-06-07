import { ref } from "vue";
import { defineStore } from 'pinia'
import db from '../firebase/init.js';
import { 
  collection,
  getDocs,
  addDoc,
  orderBy,
  limit,
  query,
} from "firebase/firestore";

export const useProductsStore = defineStore('ProductsStore', () => {
  const allProducts = ref({});

  const getAllProducts = async () => {
    const q = query(
      collection(db, "products"),
      // orderBy('queryDate', 'desc'),
      // limit(15),
    );

    const response = await getDocs(q);
    allProducts.value = response.docs;
  };


  return {
    allProducts,
    getAllProducts,
  }
});
