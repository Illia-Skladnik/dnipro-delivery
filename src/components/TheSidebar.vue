<style scoped lang="scss">
.sidebar {
  background-color: pink;
  height: 1000px;
  width: 250px;

  display: flex;
  flex-direction: column;

  &__button {
    height: 50px;
    // border-radius: 0;
    // border: 0;
    // box-shadow: 0px 0px 4px 0px #0000002E;

    cursor: pointer;

    &--first {
      display: flex;
      justify-content: space-between;
    }
  }

  &__button-text {
    &--goods {
      // height: 50px;
      // display: block;
      line-height: 50px;
      margin-left: 15px;
      // margin: 0 40px 0 15px;
    }
  }

  &__more-sign {
    margin: auto 22px auto 0
  }
}
</style>

<template>
  <div class="sidebar">
    <button
      @click="activateIsActiveMainPage"
      class="sidebar__button sidebar__button--show-goods sidebar__button--first"
    >
      <span class="sidebar__button-text--goods">Що ми маємо</span>
      <svg class="sidebar__more-sign" width="10" height="19" viewBox="0 0 10 19" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M1 17.5L9 9.5L1 1.5" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    </button >

    <button
      @click="deactivateIsActiveMainPage"
      class="sidebar__button"
    >
      <span>Про нас</span>
    </button>
  </div>
</template>

<script setup>
  // import { isActiveMainPageStore } from "../../stores/isActiveMainPageStore";

  // const { isActiveMainPage } = isActiveMainPageStore();

  // console.log('isActiveMainPageStore', isActiveMainPage)
// 
  // const props = defineProps(['activateIsActiveMainPage, deactivateIsActiveMainPage']);
  // const [activateIsActiveMainPage, deactivateIsActiveMainPage] = props;


  
  const props = defineProps({
    activateIsActiveMainPage: {
      type: Function,
      required: true
    },
    deactivateIsActiveMainPage: {
      type: Function,
      required: true
    },
  });

  const { activateIsActiveMainPage, deactivateIsActiveMainPage } = props;

</script>