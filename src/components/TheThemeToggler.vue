<style scoped lang="scss">
  @import '@/assets/styles/variables.scss';
  .theme-toggler {
    display: flex;
    justify-content: center;
    align-items: center;
    transition-duration: 300ms;
    overflow: hidden;

    cursor: pointer;

    height: 40px;
    width: 40px;

    border: 1px solid $second-color;

    border-radius: 10px;

    &:hover {
      scale: 1.15;
    }

    &--dark {
      border-color: $border-color-dark;
    }
  }
  .list-move, 
.list-enter-active,
.list-leave-active {
  transition: all 0.5s ease;
}

.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateY(-30px);
}

.list-leave-active {
  position: absolute;
}
</style>

<template>
  <TransitionGroup
    name="list"
    tag="div"
    class="theme-toggler"
    :class="darkTheme.isDarkThemeActive ? 'theme-toggler--dark' : ''"
    @click="darkTheme.toggleIsDarkThemeActive"
  >
    <img class="theme-toggler__image" v-if="!darkTheme.isDarkThemeActive" :src="sun" alt="sun"/>
    <img class="theme-toggler__image" v-else :src="moon" alt="moon"/>
  </TransitionGroup>
</template>

<script setup>
  import { useDarkThemeStore } from "../stores/DarkThemeStore";
  import sun from '../assets/svgs/sun.svg';
  import moon from '../assets/svgs/moon.svg';

  const darkTheme = useDarkThemeStore();
</script>