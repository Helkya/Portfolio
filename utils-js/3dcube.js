import { get } from './selector.js';

const container = get('.cube-container');
const cube = get('.cube');

const cube3d = container.addEventListener('mousemove', (e) => {
  const axisX = (window.innerWidth / 2 - e.pageX) * -1;
  const axisY = window.innerWidth / 2 - e.pageY;
  cube.style.transform = `rotateY(${axisX}deg) rotateX(${axisY}deg)`;
});

export { cube3d };
