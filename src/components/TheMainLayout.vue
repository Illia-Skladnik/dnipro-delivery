<style scoped lang="scss">
  @import '@/assets/styles/variables.scss';
  .main-layout {
    // background-color: $background-color;

    display: flex;
    flex-wrap: wrap;
    gap: 20px;

    margin-bottom: 150px;
  }
</style>

<template>
  <div class="main-layout">
    <TheProductCard
      v-for="product in variables.products"
      class="main-layout__product"
      :key="product.id"
      :product="product"
    />
  </div>
</template>

<script setup>
  import TheProductCard from './TheProductCard.vue'
  import { useGlobalVariablesStore } from "../stores/GlobalVariables";

  const variables = useGlobalVariablesStore();
</script>