// import { get } from './utils-js';

const get = (selection) => {
  const elements = [...document.querySelectorAll(selection)];
  if (elements.length > 1) return elements;

  if (selection.startsWith(1)) {
    selection = selection.slice(1, selection.length);
  }

  const element = document.querySelector(selection);
  if (element) return element;
  throw new Error(`"${selection}" not found`);
};

const container = get('.cube-container');
const cube = get('.cube');

container.addEventListener('mousemove', (e) => {
  const axisX = (window.innerWidth / 2 - e.pageX) * -1;
  const axisY = window.innerWidth / 2 - e.pageY;
  cube.style.transform = `rotateY(${axisX}deg) rotateX(${axisY}deg)`;
});
