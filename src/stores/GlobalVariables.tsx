import { defineStore } from 'pinia'

export const useGlobalVariablesStore = defineStore('GlobalVariablesStore', () => {
  const companyName = 'ФОП Мінін Сергій Валентинович';
  const address = 'м. Дніпро, Україна';

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

  const social = {
    phoneNumber: '+380974282926',
    instagramUsername: 'instagram',
  };

  return {
    companyName,
    address,
    products,
    phones,
    social,
  }
});