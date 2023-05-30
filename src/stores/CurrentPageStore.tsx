import { ref } from "vue";
import { defineStore } from 'pinia'

export const useCurrentPageStore = defineStore('CurrentPageStore', () => {
  const currentPage = ref('main');
  const setCurrentPage = (page) => currentPage.value = page;

  return {
    currentPage,
    setCurrentPage,
  }
});