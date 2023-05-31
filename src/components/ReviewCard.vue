<style scoped lang="scss">
  @import '@/assets/styles/variables.scss';
  .review-card {
    box-shadow: 0px 2px 4px 0px #00000040;
    margin-bottom: 30px;
    padding: 15px;

    background-color: $second-color;

    &__text-block {
      display: block;
    }

    &__top-info {
      margin-bottom: 10px;
    }
  }
</style>

<template>
  <div class="review-card">
    <div class="review-card__top-info">
      <span>{{ review.client }}</span>
    <span>{{ review.date }}</span>
    </div>
    <span class="review-card__text-block">{{ review.text }}</span>
  </div>
</template>

<script setup>

  defineProps({
    review: {
      type: Object,
      required: true
    },
  });
</script>