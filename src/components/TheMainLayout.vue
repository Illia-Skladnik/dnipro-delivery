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
    <TheProductCard
      v-for="product in products"
      class="main-layout__product"
      :key="product.id"
      :product="product"
    />
  </div>
</template>

<script>
  import TheProductCard from './TheProductCard.vue'

export default {
  data() {

    return {
      products: [
    {
      id: 1,
      image: '1.png',
      title: 'Фура великогабаритна',
      price: 'Ціну уточнюйте за номером телефону',
    },
    {
      id: 2,
      image: '2.png',
      title: 'Фура великогабаритна',
      price: 'Ціну уточнюйте за номером телефону',
    },
    {
      id: 3,
      image: '3.png',
      title: 'Фура великогабаритна',
      price: 'Ціну уточнюйте за номером телефону',
    },
    {
      id: 4,
      image: '4.png',
      title: 'Фура великогабаритна',
      price: 'Ціну уточнюйте за номером телефону',
    },
    {
      id: 5,
      image: '5.png',
      title: 'Фура великогабаритна',
      price: 'Ціну уточнюйте за номером телефону',
    },
    {
      id: 6,
      image: '6.png',
      title: 'Фура великогабаритна',
      price: 'Ціну уточнюйте за номером телефону',
    },
    {
      id: 7,
      image: '6.png',
      title: 'Фура великогабаритна',
      price: 'Ціну уточнюйте за номером телефону',
    },
  ]
    }
  },

  components: {TheProductCard}
}
</script>