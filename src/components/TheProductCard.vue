<style scoped lang="scss">
  @import '@/assets/styles/variables.scss';
  .product-card {
    width: 250px;
    background-color: $window-color;
    transition-duration: #{$theme-switch-animation}ms;
    box-shadow: 0px 2px 4px 0px #00000040;

    border-radius: 5px;
    overflow: hidden;

    &--dark {
      background-color: $window-color-dark;
      color: $font-color-dark;
    }
    
    &:hover {
      scale: 1.05;
    }

    &__image {
      width: 100%;
      height: 200px;
      object-fit: cover;
      
      margin-bottom: 10px;
    }

    &__text {
      display: block;
      text-align: center;
      margin-bottom: 10px;
    }

    &__phone-block {
      display: flex;
      justify-content: center;
      align-items: center;
      margin-bottom: 30px;
    }

    &__phone-number {
      $phone-number-size: 15;
      line-height: 30px;
      margin-right: 20px;
      font-size: #{$phone-number-size}px;
      line-height: #{$phone-number-size + 2}px;
    }

    &__phone-wrapper {
      display: flex;
      flex-direction: column;
    }

    &__phone-image {
      margin-right: 6px;
    }
  }
</style>

<template>
  <div
    class="product-card"
    :class="dark.isDarkThemeActive ? 'product-card--dark' : ''"
  >
    <img
      class="product-card__image"
      :src="require('@/assets/images/product-images/1.png')"
    />
    <h4 class="product-card__text">{{ product.title }}</h4>
    <span class="product-card__text">{{ product.price }}</span>
    <div class="product-card__phone-block">
      <img v-if="!dark.isDarkThemeActive" class="product-card__phone-image" :src="phone" alt="phone"/>
      <img v-else class="product-card__phone-image" :src="phoneDark" alt="phone"/>
      <div class="product-card__phone-wrapper">
        <span class="product-card__phone-number">{{ variables.phones[0] }}</span>
        <span class="product-card__phone-number">{{ variables.phones[1] }}</span>
      </div>
    </div>
  </div>
</template>

<script setup>
  import phone from '../assets/svgs/phone.svg';
  import phoneDark from '../assets/svgs/phoneDark.svg';
  import { useGlobalVariablesStore } from "../stores/GlobalVariables";
  import { useDarkThemeStore } from "../stores/DarkThemeStore";

  const dark = useDarkThemeStore();
  const variables = useGlobalVariablesStore();
  
  defineProps({
    product: {
      type: Object,
      required: true
    },
  });
</script>