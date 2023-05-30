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
      class="main-layout__product"
      v-for="product in products"
      :key="product.id"
      :product="product"
    />
  </div>
</template>

<script setup>
  import TheProductCard from './TheProductCard.vue'

  const products = {
    1: {
      id: 1,
      image: '1.png',
      title: 'Фура великогабаритна',
      price: 'Ціну уточнюйте за номером телефону',
      phones: ['777'],
    },
    2: {
      id: 2,
      image: '2.png',
      title: 'Фура великогабаритна',
      price: 'Ціну уточнюйте за номером телефону',
      phones: ['777'],
    },
    3: {
      id: 3,
      image: '3.png',
      title: 'Фура великогабаритна',
      price: 'Ціну уточнюйте за номером телефону',
      phones: ['777'],
    },
    4: {
      id: 4,
      image: '4.png',
      title: 'Фура великогабаритна',
      price: 'Ціну уточнюйте за номером телефону',
      phones: ['777'],
    },
    5: {
      id: 5,
      image: '5.png',
      title: 'Фура великогабаритна',
      price: 'Ціну уточнюйте за номером телефону',
      phones: ['777'],
    },
    6: {
      id: 6,
      image: '6.png',
      title: 'Фура великогабаритна',
      price: 'Ціну уточнюйте за номером телефону',
      phones: ['777'],
    },
    7: {
      id: 7,
      image: '6.png',
      title: 'Фура великогабаритна',
      price: 'Ціну уточнюйте за номером телефону',
      phones: ['777'],
    },
  };
</script>