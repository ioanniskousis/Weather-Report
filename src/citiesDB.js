import { appAlert } from './utils';

async function sortedCities(cities, callBack) {
  const citiesTB = await cities.sort((a, b) => {
    if (a.country === b.country) {
      return a.name > b.name;
    }
    return a.country > b.country;
  });
  callBack(citiesTB);
}

async function getCities(callBack) {
  const citiesURL = './cities.json';
  await fetch(citiesURL)
    .then((response) => response.json())
    .then((data) => sortedCities(data, callBack))
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

function loadCountryCities(citiesTB, code) {
  const countryCities = [];
  for (let index = 0; index < citiesTB.length; index += 1) {
    const element = citiesTB[index];
    if (element.country === code) {
      countryCities.push(element);
    }
  }
  return countryCities;
}

export {
  getCities,
  findCities,
  loadCountryCities,
};
