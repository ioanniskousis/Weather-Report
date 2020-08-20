import { appAlert } from './utils';

async function sortedCountries(countries, callBack) {
  const countriesTB = await countries.sort((a, b) => a.name > b.name);
  callBack(countriesTB);
}

async function getCountries(callBack) {
  const citiesURL = './countries.json';
  await fetch(citiesURL)
    .then((response) => response.json())
    .then((countries) => sortedCountries(countries, callBack))
    .catch((err) => appAlert('Error : '.concat(err)));
}

function findCountries(countriesTB, src) {
  const countriesFound = [];
  for (let index = 0; index < countriesTB.length; index += 1) {
    const element = countriesTB[index];
    const compareName = element.name.toUpperCase();
    const compareSrc = src.toUpperCase();
    if (compareName.includes(compareSrc)) {
      countriesFound.push(element);
    }
  }
  return countriesFound;
}

export {
  getCountries,
  findCountries,
};