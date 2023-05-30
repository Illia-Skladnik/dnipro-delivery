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

      cursor: pointer;

      &--active {
        background-color: $second-color;
      }

      &--first {
        display: flex;
        justify-content: space-between;
      }
    }

    &__button-text {
      &--goods {
        line-height: 50px;
        margin-left: 15px;
      }
    }

    &__more-sign {
      margin: auto 22px auto 0
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
      @click="activateIsActiveMainPage"
      class="sidebar__button sidebar__button--show-goods sidebar__button--first"
      :class="isActiveMainPage ? 'sidebar__button--active' : ''"
    >
      <span class="sidebar__button-text--goods">Що ми маємо</span>
      <svg class="sidebar__more-sign" width="10" height="19" viewBox="0 0 10 19" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M1 17.5L9 9.5L1 1.5" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    </button >

    <button
    :class="isActiveMainPage ? '' : 'sidebar__button--active'"
      @click="deactivateIsActiveMainPage"
      class="sidebar__button"
    >
      <span>Про нас</span>
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
  const props = defineProps({
    activateIsActiveMainPage: {
      type: Function,
      required: true
    },
    deactivateIsActiveMainPage: {
      type: Function,
      required: true
    },
    isActiveMainPage: {
      type: Boolean,
      required: true
    },
  });
</script>