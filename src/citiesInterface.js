import showSearchSource from './searchSource';
import { gel, crel, sat } from './utils';

function renderCity(city, callBack) {
  const citiesTableBody = gel('citiesTableBody');
  if (city.country) {
    const row = crel('div');
    sat(row, 'datafield', 'city');
    sat(row, 'citycode', city.id);
    row.className = 'citiesTableRow';

    const cityName = crel('div');
    cityName.innerHTML = city.name;

    const countryName = crel('div');
    countryName.innerHTML = city.country;

    row.appendChild(cityName);
    row.appendChild(countryName);

    citiesTableBody.appendChild(row);

    row.addEventListener('click', () => {
      const cityCode = row.getAttribute('citycode');
      callBack(cityCode);
    });
  }
}

function renderCities(cities, callBack) {
  showSearchSource(0);
  const citiesTableBody = document.getElementById('citiesTableBody');
  citiesTableBody.innerHTML = '';
  citiesTableBody.scrollTo(0, 0);

  const limit = cities.length > 100 ? 100 : cities.length;

  for (let index = 0; index < limit; index += 1) {
    renderCity(cities[index], callBack);
  }
}

function watchCitySearchButton(callback) {
  gel('searchCityButton').addEventListener('click', () => {
    callback();
  });
  gel('searchCityInput').addEventListener('keypress', e => {
    if (e.keyCode === 13) callback();
  });
}

export {
  renderCities,
  watchCitySearchButton,
};