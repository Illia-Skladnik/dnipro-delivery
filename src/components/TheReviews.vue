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
      v-for="review in reviews"
      :key="review.id"
      :review="review"
    />
  </div>
</template>

<script setup> 
  import ReviewCard from './ReviewCard.vue'
  import { useGlobalVariablesStore } from "../stores/GlobalVariables";

  const variables = useGlobalVariablesStore();
  const reviews = {
    1: {
      id: 1,
      client: 'Олександр',
      stars: 5,
      date: '12.03.2023',
      text: 'А щебьоночка у вас є?',
    },
    2: {
      id: 2,
      client: 'не Олександр',
      stars: 4,
      date: '02.11.2022',
      text: 'Дуже сподобався кран дуже високий. Але є одне зауваження – коли дивишся на нього вгору, починає крутитися голова. Тож мінус одна зірка.',
    },
    3: {
      id: 3,
      client: 'Олександра',
      stars: 5,
      date: '15.07.2023',
      text: 'Достатньо потужна машина. Та чи впорається вона з вантажем моїх нездійснених надій?',
    },
  }
</script>