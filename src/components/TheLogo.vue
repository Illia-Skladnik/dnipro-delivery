<style scoped lang="scss">
  .logo {
    :hover {
      transition-duration: 5s;
      transform: translateX(90vw);
    }
  }
</style>

<template>
  <section class="logo">
    <img v-if="!dark.isDarkThemeActive" :src="logo" alt="sign"/>
    <img v-else :src="logoDark" alt="sign"/>
  </section>
</template>

<script setup>
  import logo from '../assets/svgs/logo.svg';
  import logoDark from '../assets/svgs/logoDark.svg';
  import { useDarkThemeStore } from "../stores/DarkThemeStore";

  const dark = useDarkThemeStore();
</script>