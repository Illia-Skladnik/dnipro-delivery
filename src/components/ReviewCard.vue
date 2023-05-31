<style scoped lang="scss">
  @import '@/assets/styles/variables.scss';
  .review-card {
    box-shadow: 0px 2px 4px 0px #00000040;
    margin-bottom: 30px;
    padding: 15px;
    transition-duration: #{$theme-switch-animation}ms;

    background-color: $window-color;

    &--dark {
      background-color: $window-color-dark;
      color: $font-color-dark;
    }

    &__text-block {
      display: block;
    }

    &__top-info {
      margin-bottom: 20px;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    &__image {
      margin-right: 6px;
    }

    &__info-block {
      display: flex;
      margin-right: 20px;
    }

    &__text {
      line-height: 25px;
    }

    &__review-text {
      display: flex;
      justify-content: center;
    }
  }
</style>

<template>
  <div
    class="review-card"
    :class="dark.isDarkThemeActive ? 'review-card--dark' : ''"
  >
    <div class="review-card__top-info">
      <div class="review-card__info-block">
        <img
          v-if="!dark.isDarkThemeActive"
          class="review-card__image"
          :src="user"
          alt="user"
        />

        <img
          v-else
          class="review-card__image"
          :src="userDark"
          alt="user"
        />
        <span class="review-card__text">{{ review.client }}</span>
      </div>

      <div class="review-card__info-block">
        <img
          v-if="!dark.isDarkThemeActive"
          class="review-card__image"
          :src="calendar"
          alt="calendar"
        />

        <img
          v-else
          class="review-card__image"
          :src="calendarDark"
          alt="calendar"
        />
        <span class="review-card__text">{{ review.date }}</span>
        </div>
      <Evaluation :stars="review.stars"/>
    </div>
    <span class="review-card__review-text">{{ review.text }}</span>
  </div>
</template>

<script setup>
  import Evaluation from './Evaluation.vue'
  import user from '../assets/svgs/user.svg';
  import userDark from '../assets/svgs/userDark.svg';
  import calendar from '../assets/svgs/calendar.svg';
  import calendarDark from '../assets/svgs/calendarDark.svg';
  import { useDarkThemeStore } from "../stores/DarkThemeStore";

  const dark = useDarkThemeStore();
  defineProps({
    review: {
      type: Object,
      required: true
    },
  });
</script>