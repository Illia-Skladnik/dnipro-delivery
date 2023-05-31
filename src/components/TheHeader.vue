<style scoped lang="scss">
  @import '@/assets/styles/variables.scss';
  .header {
    height: #{$footer-header-height}px;
    display: flex;
    justify-content: space-between;
    box-shadow: 0px 4px 4px 0px #00000040;


    &__about-company {
      display: flex;
      margin-left: 100px;
    }

    &__company-name {
      display: block;
      margin: auto 0;
    }

    &__logo {
      margin: auto 10px auto 0;
    }

    &__phone-block {
      display: flex;
      margin: auto 100px auto 0;
    }

    &__phone-image {
      margin-right: 20px;
    }

    &__phone-text {
      line-height: 30px;
      margin-right: 20px;
    }
  }
</style>

<template>
  
  <header class="header">
    <section class="header__about-company">
      <TheLogo class="header__logo"/>
      <span class="header__company-name">
        {{ variables.companyName }}
      </span>
    </section>

    <section class="header__phone-block">
      <img class="header__phone-image" :src="phone" alt="phone"/>
      <span class="header__phone-text">
        +380 (63) 444-35-08
      </span>
      <TheThemeToggler/>
    </section>
  </header>
</template>

<script setup>
  import { useGlobalVariablesStore } from "../stores/GlobalVariables";
  import TheLogo from './TheLogo.vue'
  import phone from '../assets/svgs/phone.svg';
  import TheThemeToggler from './TheThemeToggler.vue'

  const variables = useGlobalVariablesStore();
</script>