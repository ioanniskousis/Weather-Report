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

function findCities(citiesTB, src) {
  const citiesFound = [];
  for (let index = 0; index < citiesTB.length; index += 1) {
    const element = citiesTB[index];
    const compareName = element.name.toUpperCase();
    const compareSrc = src.toUpperCase();
    if (compareName.includes(compareSrc)) {
      citiesFound.push(element);
    }
  }
  return citiesFound;
}

export {
  getCities,
  findCities,
};
