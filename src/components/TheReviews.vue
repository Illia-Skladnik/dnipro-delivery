<style scoped lang="scss">
  @import '@/assets/styles/variables.scss';

  .reviews {
    display: flex;
    flex-direction: column;

    height: fit-content;

    &__title {
      text-align: center;
      margin-bottom: 30px;
    }
  }
</style>

<template>
  <div class="reviews">
    <h2 class="reviews__title">Відгуки про компанію {{ variables.companyName }}</h2>
    <ReviewCard
      v-for="review in variables.reviews"
      :key="review.id"
      :review="review"
    />
  </div>
</template>

<script setup> 
  import ReviewCard from './ReviewCard.vue'
  import { useGlobalVariablesStore } from "../stores/GlobalVariables";

  const variables = useGlobalVariablesStore();
</script>