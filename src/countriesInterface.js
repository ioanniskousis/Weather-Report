// import getCountries from './countriesDB';
import showSearchSource from './searchSource';
import { gel, crel, doc } from './utils';

function renderCountry(country, callBack) {
  const citiesTableBody = gel('citiesTableBody');
  const row = crel('div');
  row.setAttribute('datafield', 'country');
  row.setAttribute('countrycode', country.code);
  row.className = 'citiesTableRow';
  const countryName = crel('div');
  countryName.innerHTML = country.name;

  const countryCode = crel('div');
  countryCode.innerHTML = country.code;

  doc(row, countryName);
  doc(row, countryCode);
  citiesTableBody.appendChild(row);

  row.addEventListener('click', () => {
    callBack(country.code);
  });
}
function renderCountries(countries, callBack) {
  showSearchSource(1);
  const citiesTableBody = gel('citiesTableBody');
  citiesTableBody.innerHTML = '';
  citiesTableBody.scrollTo(0, 0);
  for (let index = 0; index < countries.length; index += 1) {
    renderCountry(countries[index], callBack);
  }
}

export default renderCountries;
