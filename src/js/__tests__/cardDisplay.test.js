/**
 * @jest-environment jsdom
 */

import cardDisplay from '../cardDisplay';

const movieСards = [
  {
    name: 'greenMile',
    title: 'Зеленая миля',
    passport: 'The Green Mile, 1999, 189 мин.',
    director: 'США. драмма Режиссер: Френк Дорабонт',
    actors: 'В ролях: Том Хэнкс, Дэвид Морс',
    picture: '',
    rating: 9.2,
    descript: '',
  },
  {
    name: 'schindlerList',
    title: 'Список Шиндлера',
    passport: 'Schindlers List, 1993, 195 мин.',
    director: 'США. драмма Режиссер: Стивен Спилберг',
    actors: 'В ролях: Лиам Нисон, Бен Кингсли',
    picture: '',
    rating: 9.3,
    descript: '',
  },
  {
    name: 'forrestGump',
    title: 'Форрест Гамп',
    passport: 'forrestGump, 1994, 142 мин.',
    director: 'США. драмма Режиссер: Роберт Земекис',
    actors: 'В ролях: Том Хэнкс, Робин Райт',
    picture: '',
    rating: 9.0,
    descript: '',
  },
];

test('Тест отображения элементов на странице', () => {
  document.body.innerHTML = '<div class="container"></div>';
  const parentEl = document.querySelector('.container');
  movieСards.sort((a, b) => b.rating - a.rating);
  movieСards.forEach((obj) => {
    cardDisplay(parentEl, obj);
  });
  const box = document.querySelectorAll('.box');
  expect(box.length).toBe(3);
});

test('Теcт сорторовки по рейтингу', () => {
  document.body.innerHTML = '<div class="container"></div>';
  const parentEl = document.querySelector('.container');
  movieСards.sort((a, b) => b.rating - a.rating);
  movieСards.forEach((obj) => {
    cardDisplay(parentEl, obj);
  });
  const box = document.querySelectorAll('.box');
  const firstElement = box[0];
  const result = firstElement.querySelector('[name="schindlerList"]');
  expect(result).toBeTruthy();
});
