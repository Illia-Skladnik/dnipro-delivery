<style scoped lang="scss">
  @import '@/assets/styles/variables.scss';
  .product-card {
    width: 250px;
    background-color: $window-color;
    transition-duration: 300ms;
    box-shadow: 0px 2px 4px 0px #00000040;
    
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
  }
</style>

<template>
  <div class="product-card">
    <img
      class="product-card__image"
      :src="'/src/assets/images/product-images/' + product.image"
    />
    <span class="product-card__text">{{ props.product.title }}</span>
    <span class="product-card__text">{{ props.product.price }}</span>
    <div class="product-card__phone-block">
      <ThePhoneSvg/>
      <span>{{ props.product.phones[0] }}</span>
    </div>
  </div>
</template>

<script setup>
  import ThePhoneSvg from './ThePhoneSvg.vue'
  const props = defineProps({
    product: {
      type: Object,
      required: true
    },
  });
</script>