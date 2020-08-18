import { appAlert } from './utils';

function loadCities(cities, callBack) {
  const citiesTB = cities.sort((a, b) => {
    if (a.country === b.country) {
      return a.name > b.name;
    }
    return a.country > b.country;
  });
  callBack(citiesTB);
}

function getCities(callBack) {
  const citiesURL = './cities.json';
  fetch(citiesURL)
    .then((response) => response.json())
    .then((data) => loadCities(data, callBack))
    .catch((err) => appAlert('Error : '.concat(err)));
}

export default getCities;
