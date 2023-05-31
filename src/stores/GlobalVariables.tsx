import { defineStore } from 'pinia'

export const useGlobalVariablesStore = defineStore('GlobalVariablesStore', () => {
  const companyName = 'ПП Дніпро Делівері';

  return {
    companyName,
  }
});