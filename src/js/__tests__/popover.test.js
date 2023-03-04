/**
 * @jest-environment jsdom
 */
import cardDisplay from '../cardDisplay';
import Popover from '../popover';

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

document.body.innerHTML = '<div class="container"></div>';
const parentEl = document.querySelector('.container');
movieСards.forEach((obj) => {
  cardDisplay(parentEl, obj);
});
const popover = new Popover(parentEl);
const btnElements = parentEl.querySelectorAll('.divBtn');
btnElements.forEach((btn) => {
  btn.addEventListener('click', (e) => {
    popover.starting(e.currentTarget, e.target);
  });
});

test('Тест на открытие вплывающего окна', () => {
  const btnGreenMile = parentEl.querySelector('[name="greenMile"]');
  btnGreenMile.click();
  const result = parentEl.querySelector('.greenMile');
  expect(result).toBeTruthy();
});

test('Тест на открытие всех всплывающих окон', () => {
  const btnSchindlerList = parentEl.querySelector('[name="schindlerList"]');
  const btnForrestGump = parentEl.querySelector('[name="forrestGump"]');
  btnSchindlerList.click();
  btnForrestGump.click();

  const result = parentEl.querySelectorAll('.footnote');
  expect(result.length).toBe(3);
});

test('Тест на закрытие вплывающего окна', () => {
  const btnGreenMile = parentEl.querySelector('[name="greenMile"]');
  btnGreenMile.click();
  const result = parentEl.querySelectorAll('.footnote');
  expect(result.length).toBe(2);
});

test('Тест на правильно закрытые всплывающие окна', () => {
  const btnForrestGump = parentEl.querySelector('[name="forrestGump"]');
  btnForrestGump.click();
  const result = parentEl.querySelector('.schindlerList');
  expect(result).toBeTruthy();
});

test('Тест надписи кнопоки с закрытым окном', () => {
  const btnGreenMile = parentEl.querySelector('[name="greenMile"]');
  const result = btnGreenMile.firstChild.textContent;
  expect(result).toBe('Показать');
});

test('Тест надписи кнопоки с открытым окном', () => {
  const btnGreenMile = parentEl.querySelector('[name="schindlerList"]');
  const result = btnGreenMile.firstChild.textContent;
  expect(result).toBe('Скрыть');
});
