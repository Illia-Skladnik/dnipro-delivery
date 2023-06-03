import { ref } from "vue";
import { defineStore } from 'pinia'
import db from '../firebase/init.js';
import { collection, getDocs, addDoc } from "firebase/firestore";

export const useReviewsStore = defineStore('ReviewsStore', () => {
  const allReviews = ref({});

  const getAllReviews = async () => {
    const response = await getDocs(collection(db, 'reviews'));
    allReviews.value = response.docs;
  };

  const createReview = async (review) => {
    const date = new Date()
      .toLocaleDateString('en-US')
      .replace(/\//g, '.');

    const colRef = collection(db, 'reviews');

    review.date = date;

    await addDoc(colRef, review);

    getAllReviews()
  };

  return {
    allReviews,
    getAllReviews,
    createReview,
  }
});
