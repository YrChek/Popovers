import cardDisplay from './cardDisplay';
import movieСards from './cards';
import Popover from './popover';

document.addEventListener('DOMContentLoaded', () => {
  const parentEl = document.querySelector('.container');
  movieСards.sort((a, b) => b.rating - a.rating);
  movieСards.forEach((obj) => {
    cardDisplay(parentEl, obj);
  });
  const btnElements = parentEl.querySelectorAll('.divBtn');
  const popover = new Popover(parentEl);
  btnElements.forEach((btn) => {
    btn.addEventListener('click', (e) => {
      popover.starting(e.currentTarget, e.target);
    });
  });
});
