<style scoped lang="scss">
  @import '@/assets/styles/variables.scss';
  @import '@/assets/styles/_mixins.scss';
  .feedback-form {
    box-shadow: 0px 2px 4px 0px #00000040;
    margin-bottom: 30px;
    padding: 15px;
    transition-duration: #{$theme-switch-animation}ms;

    background-color: $window-color;

    border-radius: 5px;

    @include onMobile {
      width: 250px;
    }

    &--dark {
      background-color: $window-color-dark;
      color: $font-color-dark;
    }

    
    &__title {
      display: block;
      margin: 0 auto;
      width: max-content;

      margin-bottom: 10px;

      @include onMobile {
        font-size: 16px;
      }
    }

    &__input-name {
      height: 40px;
      border-radius: 5px;
      width: 100%;
      background-color: $primary-color;
      margin-bottom: 10px;
      padding-left: 10px;

      &::placeholder {
        padding-left: 10px;
      }

      &--dark {
        background-color: $primary-color-dark;
        color: $font-color-dark;

        &::placeholder {
          color: $font-color-dark-placholder;
        }
      }
    }

    &__input-text {
      display: block;
      height: 75px;
      width: 100%;
      border-radius: 5px;
      padding-left: 10px;

      margin-bottom: 10px;
      background-color: $primary-color;

      &::placeholder {
        padding-left: 10px;
      }

      &--dark {
        background-color: $primary-color-dark;
        color: $font-color-dark;

        &::placeholder {
          color: $font-color-dark-placholder;
        }
      }
    }

    &__star {
      transition-duration: 300ms;
      width: 25px;
      height: 25px;
      
      &:hover {
        scale: 1.2;
      }
    }

    &__submit-button {
      font-size: 18px;
      display: block;
      margin: 0 auto;
      border-radius: 5px;
      transition-duration: 300ms;
      
      height: 50px;
      width: 250px;

      background-color: $second-color;

      @include onMobile {
        width: 100%;
      }

      &--dark {
        background-color: $second-color-dark;
        color: $font-color-dark;
        border-color: $border-color-dark;
      }

      &:hover {
        scale: 1.05;
      }
    }

    &__wrapper {
      display: flex;
    }

    &__right-wrapper {
      flex: 1;
      display: flex;
      align-items: center;

      position: relative;
      overflow: hidden;

      @include onMobile {
        display: none;
      }
    }

    &__grade-wrapper {
      width: max-content;
      margin: 0 auto;

      .feedback-form__star-wrapper:last-of-type {
        margin-right: 0;
      }
    }

    &__left-wrapper {
      flex: 1;
      display: flex;
      flex-direction: column;

      margin-bottom: 10px;

      @include onMobile {
        width: 100%;
      }
    }

    &__car {
      width: 58px;
      height: 38px;

      position: absolute;
      animation: slideRight 4s linear infinite;
    }

    &__star-wrapper {
      margin-right: 5px;
    }
  }
</style>

<template>
  <form
    class="feedback-form"
    @submit.prevent="submit"
    :class="dark.isDarkThemeActive ? 'feedback-form--dark' : ''"
  >

    <div class="feedback-form__wrapper">
      <div class="feedback-form__left-wrapper">
      <h3 class="feedback-form__title">Надішліть нам свій відгук</h3>
    
      <input
        class="feedback-form__input-name"
        :class="dark.isDarkThemeActive ? 'feedback-form__input-name--dark' : ''"
        v-model="review.name"
        type="text"
        placeholder="Ім'я"
      >

      <div class="feedback-form__grade-wrapper">
        <span
          class="feedback-form__star-wrapper"
          v-for="star in 5"
          :key="star"
          @click="selectGrade(star)"
        >
          <img v-if="star < review.grade + 1" :src="starActive" alt="star-active" class="feedback-form__star" />
          <img v-else-if="dark.isDarkThemeActive" :src="starInactive" alt="star-inactive" class="feedback-form__star" />
          <img v-else :src="starInactiveFrame" alt="star-inactive" class="feedback-form__star" />
        </span>
      </div>
    </div>

    <div class="feedback-form__right-wrapper">
      <img
        :src="dark.isDarkThemeActive ? carWhite : carBlack"
        alt="car" 
        class="feedback-form__car"
      >
    </div>
    </div>

    <input
      class="feedback-form__input-text"
      :class="dark.isDarkThemeActive ? 'feedback-form__input-text--dark' : ''"
      type="text"
      placeholder="Відгук"
      v-model="review.review"
    >

    <button
      class="feedback-form__submit-button"
      type="submit"
      :class="dark.isDarkThemeActive ? 'feedback-form__submit-button--dark' : ''"
    >
      Надіслати відгук
    </button>
  </form>
</template>

<script setup>
  import { ref } from 'vue';
  import starActive from '../assets/svgs/starActive.svg';
  import starInactive from '../assets/svgs/starInactive.svg';
  import carWhite from '../assets/svgs/carWhite.svg';
  import carBlack from '../assets/svgs/carBlack.svg';
  import { useReviewsStore } from "../stores/ReviewsStore";
  import { useDarkThemeStore } from "../stores/DarkThemeStore";
  import starInactiveFrame from '../assets/svgs/starInactiveFrame.svg';

  const dark = useDarkThemeStore();
  const reviewsStore = useReviewsStore();
  
  const review = ref({
    name: '',
    grade: 0,
    review: '',
  });
  
  const submit = () => reviewsStore.createReview(review.value);
  const selectGrade = (value) => review.value.grade = value;
</script>