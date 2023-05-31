import { ref } from "vue";
import { defineStore } from 'pinia'

export const useDarkThemeStore = defineStore('DarkThemeStore', () => {
  const isDarkThemeActive = ref(true);
  const toggleIsDarkThemeActive = () => isDarkThemeActive.value = !isDarkThemeActive.value;

  return {
    isDarkThemeActive,
    toggleIsDarkThemeActive,
  }
});