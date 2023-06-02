import { defineStore } from 'pinia'

export const useGlobalVariablesStore = defineStore('GlobalVariablesStore', () => {
  const companyName = 'ФОП Мінін Сергій Валентинович';
  const address = 'м. Дніпро, Україна';
  const reviews = {
    1: {
      id: 1,
      client: 'Олександр',
      stars: 5,
      date: '12.03.2022',
      text: 'Оренда у хорошому стані, обладнання отримали точно у термін. Рекомендую.',
    },
    2: {
      id: 2,
      client: 'Маша',
      stars: 4,
      date: '02.5.2022',
      text: 'Допомогли вирішити мої завдання без проблем.',
    },
    3: {
      id: 3,
      client: 'Олександра',
      stars: 5,
      date: '15.10.2022',
      text: 'Все, як було обумовлено. Залишився задоволений, обладнання виправдало себе.',
    },
    4: {
      id: 4,
      client: 'Микола Петрович',
      stars: 4,
      date: '20.03.2023',
      text: 'Хлопці молодці, швидко приїхали та допомогли перевезти вантаж з Дніпра до Львова. Рекомендую, якість та швидкість гарантована!',
    },
    5: {
      id: 5,
      client: 'Иван',
      stars: 5,
      date: '10.05.2023',
      text: 'Полностью доволен услугами по аренде крана',
    },
  }
  const products = [
    {
      id: 1,
      image: '1.avif',
      title: 'Фура великогабаритна',
      price: 'Ціну уточнюйте за номером телефону',
    },
    {
      id: 2,
      image: '2.avif',
      title: 'Фура великогабаритна',
      price: 'Ціну уточнюйте за номером телефону',
    },
    {
      id: 3,
      image: '3.avif',
      title: 'Фура великогабаритна',
      price: 'Ціну уточнюйте за номером телефону',
    },
    {
      id: 4,
      image: '4.avif',
      title: 'Фура великогабаритна',
      price: 'Ціну уточнюйте за номером телефону',
    },
    {
      id: 5,
      image: '5.avif',
      title: 'Фура великогабаритна',
      price: 'Ціну уточнюйте за номером телефону',
    },
    {
      id: 6,
      image: '6.avif',
      title: 'Фура великогабаритна',
      price: 'Ціну уточнюйте за номером телефону',
    },
    {
      id: 7,
      image: '6.avif',
      title: 'Фура великогабаритна',
      price: 'Ціну уточнюйте за номером телефону',
    },
  ];

  const phones = ['+38 (095) 579 86 40', '+38 (097) 428 29 26'];

  return {
    companyName,
    address,
    reviews,
    products,
    phones,
  }
});