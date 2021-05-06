import * as get from './utils-js/selector';

const container = get('.cube-container');
const cube = get('.cube');

container.addEventListener('mousemove', (e) => {
  const axisX = (window.innerWidth / 2 - e.pageX) * -1;
  const axisY = window.innerWidth / 2 - e.pageY;
  cube.style.transform = `rotateY(${axisX}deg) rotateX(${axisY}deg)`;
});
