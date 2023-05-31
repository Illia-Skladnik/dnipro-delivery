<style scoped lang="scss">
  @import '@/assets/styles/variables.scss';

  .reviews {
    display: flex;
    flex-direction: column;

    height: fit-content;

    margin-bottom: 150px;

    transition-duration: #{$theme-switch-animation}ms;

    &__title {
      text-align: center;
      margin-bottom: 30px;
    }

    &--dark {
      color: $font-color-dark;
    }

    &__review{
      &:hover {
        scale: 1.015;
      }
    }
  }
</style>

<template>
  <div
    class="reviews"
    :class="dark.isDarkThemeActive ? 'reviews--dark' : ''"
  >
    <h2 class="reviews__title">Відгуки про компанію {{ variables.companyName }}</h2>
    <ReviewCard
      class="reviews__review"
      v-for="review in variables.reviews"
      :key="review.id"
      :review="review"
    />
  </div>
</template>

<script setup> 
  import ReviewCard from './ReviewCard.vue'
  import { useGlobalVariablesStore } from "../stores/GlobalVariables";
  import { useDarkThemeStore } from "../stores/DarkThemeStore";

  const dark = useDarkThemeStore();
  const variables = useGlobalVariablesStore();
</script>