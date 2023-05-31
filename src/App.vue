<style scoped lang="scss">
  .main {
    &__header {
      margin-bottom: 30px;
    }

    &__sidebar {
      margin-right: 20px;
      width: 250px;
    }

    &__page {
      display: flex;
      margin: 0 50px;
    }

    &__content {
      flex-grow: 1;
    }
  }
</style>

<template>


  <main class="main">
    <TheHeader class="main__header"/>
      <section class="main__page">
        <TheSidebar
        class="main__sidebar"
      />
      <TheMainLayout class="main__content" v-if="activePage.currentPage === 'main'"/>
      <TheAboutUs class="main__content" v-if="activePage.currentPage === 'about'"/>
      <TheRequisites class="main__content" v-if="activePage.currentPage === 'requisites'"/>
      <TheReviews class="main__content" v-if="activePage.currentPage === 'reviews'"/>
    </section>
  </main>
  <TheFooter/>
</template>


<script setup>
  import TheHeader from './components/TheHeader.vue'
  import TheFooter from './components/TheFooter.vue'
  import TheSidebar from './components/TheSidebar.vue'
  import TheMainLayout from './components/TheMainLayout.vue'
  import TheAboutUs from './components/TheAboutUs.vue'
  import TheReviews from './components/TheReviews.vue'
  import TheRequisites from './components/TheRequisites.vue'
  import { useCurrentPageStore } from "./stores/CurrentPageStore";
  
  const activePage = useCurrentPageStore();
</script>