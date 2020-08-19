import { appAlert } from './utils';

function loadCountries(countries, callBack) {
  const countriesTB = countries.sort((a, b) => a.name > b.name);
  callBack(countriesTB);
}

function getCountries(callBack) {
  const citiesURL = './countries.json';
  fetch(citiesURL)
    .then((response) => response.json())
    .then((data) => loadCountries(data, callBack))
    .catch((err) => appAlert('Error : '.concat(err)));
}

export default getCountries;