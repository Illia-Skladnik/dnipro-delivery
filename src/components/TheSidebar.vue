<style scoped lang="scss">
  @import '@/assets/styles/variables.scss';
  .sidebar {
    background-color: $window-color;
    height: min-content;
    
    display: flex;
    flex-direction: column;

    button:last-of-type {
      margin-bottom: 30px;
    }

    &__button {
      height: 50px;
      width: 250px;
      border: 1px solid $border-color;
      background-color: rgba(0, 0, 0, 0);
      
      display: flex;
      justify-content: space-between;

      cursor: pointer;

      &--active {
        background-color: $second-color;
      }
    }

    &__button-text {
      display: flex;
      height: 100%;
      align-items: center;

      margin-left: 15px;
    }

    &__more-sign {
      margin: auto 20px auto 0;
      
    }

    &__description-block {
      margin-left: 20px;
      margin-bottom: 30px;
    }

    &__description-title {
      margin-bottom: 15px;
    }
  }
</style>

<template>
  <div class="sidebar">
    <button
      @click="activePage.setCurrentPage('main')"
      class="sidebar__button"
      :class="activePage.currentPage === 'main' ? 'sidebar__button--active' : ''"
    >
      <span class="sidebar__button-text">Що ми маємо</span>
      <img class="sidebar__more-sign" v-if="activePage.currentPage === 'main'" :src="moreSign" alt="sign"/>
    </button >

    <button
      :class="activePage.currentPage === 'about' ? 'sidebar__button--active' : ''"
      @click="activePage.setCurrentPage('about')"
      class="sidebar__button"
    >
      <span class="sidebar__button-text">Про нас</span>
      <img class="sidebar__more-sign" v-if="activePage.currentPage === 'about'" :src="moreSign" alt="sign"/>
    </button>

    <button
      :class="activePage.currentPage === 'requisites' ? 'sidebar__button--active' : ''"
      @click="activePage.setCurrentPage('requisites')"
      class="sidebar__button"
    >
      <span class="sidebar__button-text">Реквізити</span>
      <img class="sidebar__more-sign" v-if="activePage.currentPage === 'requisites'" :src="moreSign" alt="sign"/>
    </button>

    <button
      :class="activePage.currentPage === 'reviews' ? 'sidebar__button--active' : ''"
      @click="activePage.setCurrentPage('reviews')"
      class="sidebar__button"
    >
      <span class="sidebar__button-text">Відгуки</span>
      <img class="sidebar__more-sign" v-if="activePage.currentPage === 'reviews'" :src="moreSign" alt="sign"/>
    </button>

    <div class="sidebar__description-block">
      <h3 class="sidebar__description-title">Компанія</h3>
      <span class="sidebar__description-text">{{ variables.companyName }}</span>
    </div>

    <div class="sidebar__description-block">
      <h3 class="sidebar__description-title">Адреса</h3>
      <span class="sidebar__description-text">м. Дніпро</span>
    </div>
  </div>
</template>

<script setup>
  import { useGlobalVariablesStore } from "../stores/GlobalVariables";
  import { useCurrentPageStore } from "../stores/CurrentPageStore";
  import moreSign from '../assets/svgs/moresign.svg';

  const variables = useGlobalVariablesStore();
  const activePage = useCurrentPageStore();

</script>