<style scoped lang="scss">
  .main {
    &__header {
      margin-bottom: 30px;
    }

    &__sidebar {
      margin-left: 50px;
    } 
  }
</style>

<template>
  <main class="main">
    <TheHeader class="main__header"/>
    <TheSidebar
      class="main__sidebar"
      :activateIsActiveMainPage="activateIsActiveMainPage"
      :deactivateIsActiveMainPage="deactivateIsActiveMainPage"
    />
  </main>
</template>


<script setup>
  import TheHeader from './components/TheHeader.vue'
  import TheSidebar from './components/TheSidebar.vue'
  import { ref } from "vue";

  const isActiveMainPage = ref(true);


  const activateIsActiveMainPage = () => {
    isActiveMainPage.value = true;
  };
  
  const deactivateIsActiveMainPage = () => {
    isActiveMainPage.value = false;
  };
</script>