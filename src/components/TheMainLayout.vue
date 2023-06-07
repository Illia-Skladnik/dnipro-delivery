<style scoped lang="scss">
  @import '@/assets/styles/variables.scss';
  .main-layout {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;

    margin-bottom: 150px;
  }
</style>

<template>
  <div class="main-layout">
    <div v-for="product, index in products">
      <ProductCard :product="product" :key="index"/>
    </div>
  </div>
</template>

<script setup>
  import { useGlobalVariablesStore } from "../stores/GlobalVariables";
  import ProductCard from './ProductCard.vue'

  const { products } = useGlobalVariablesStore();
</script>