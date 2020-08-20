import { gel } from './utils';

function resize() {
  if (window.innerWidth > 768) {
    gel('citiesTableView').style.display = 'block';
    gel('weatherView').style.display = 'block';
  } else {
    gel('citiesTableView').style.display = 'block';
    gel('weatherView').style.display = 'none';
  }
}

window.addEventListener('resize', () => {
  resize();
});

window.addEventListener('load', () => {
  resize();
});

export default resize;
