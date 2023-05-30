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

      display: flex;
      justify-content: space-between;

      cursor: pointer;

      &--active {
        background-color: $second-color;
      }

      // &--first {
      //   display: flex;
      //   justify-content: space-between;
      // }
    }

    &__button-text {
      display: flex;
      height: 100%;
      align-items: center;


      margin-left: 15px;
    }

    &__more-sign {
      // margin: auto 22px auto 0
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

    <div class="sidebar__description-block">
      <h3 class="sidebar__description-title">Компанія</h3>
      <span class="sidebar__description-text">ЧП Дніпро-Делівері</span>
    </div>

    <div class="sidebar__description-block">
      <h3 class="sidebar__description-title">Адреса</h3>
      <span class="sidebar__description-text">м. Дніпро</span>
    </div>
  </div>
</template>

<script setup>
  import { useCurrentPageStore } from "../stores/CurrentPageStore";
  import moreSign from '../assets/svgs/moresign.svg';
  
  const activePage = useCurrentPageStore();

</script>