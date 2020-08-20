import '../resources/stylesheets/style.css';
import { getCities, findCities, loadCountryCities } from './citiesDB';
import { getCountries, findCountries } from './countriesDB';
import { renderCountries, watchCountrySearchButton } from './countriesInterface';
import { renderCities, watchCitySearchButton } from './citiesInterface';
import { renderWeather, watchWeatherViewControls, renderLoadTime } from './cityWeatherInterface';
import downloadCityData from './weatherAPI';
import { gel } from './utils';
import favouriteCitiesDB from './favouriteCities';
import seed from './seed';
import { resetCityTabs, watchExplorerTabs } from './explorerTabs';
import './window';

const favouriteCities = favouriteCitiesDB();
if (favouriteCities.cities.length === 0) seed(favouriteCities);

let citiesTB = null;
let countriesTB = null;

function citiesDatabaseArrivedCallBack(cities) {
  citiesTB = cities;
}

function countriesDatabaseArrivedCallBack(countries) {
  countriesTB = countries;
}

function cityWeatherArrivedCallBack(data, startTime) {
  renderLoadTime(startTime);
  renderWeather(data);
}

function citySelectedCallBack(cityCode) {
  downloadCityData(cityCode, cityWeatherArrivedCallBack);
}

function countrySelectedCallBack(countryCode) {
  const countryCities = loadCountryCities(citiesTB, countryCode);
  resetCityTabs(1);
  renderCities(countryCities, citySelectedCallBack);
}

function explorerTabSelectedCallBack(index) {
  resetCityTabs(index);

  switch (index) {
    case 0: {
      renderCities(favouriteCities.cities, citySelectedCallBack);
      break;
    }
    case 1: {
      renderCities(citiesTB, citySelectedCallBack);
      break;
    }
    case 2: {
      renderCountries(countriesTB, countrySelectedCallBack);
      break;
    }
    default:
      break;
  }
}

function findCitiesLike() {
  resetCityTabs(1);
  const searchCityInput = gel('searchCityInput');
  const srcCities = findCities(citiesTB, searchCityInput.value);
  renderCities(srcCities, citySelectedCallBack);
}

function findCountriesLike() {
  resetCityTabs(2);
  const searchCountryInput = gel('searchCountryInput');
  const srcCountries = findCountries(countriesTB, searchCountryInput.value);
  renderCountries(srcCountries, countrySelectedCallBack);
}

getCountries(countriesDatabaseArrivedCallBack);
getCities(citiesDatabaseArrivedCallBack);
renderCities(favouriteCities.cities, citySelectedCallBack);

watchWeatherViewControls();
watchExplorerTabs(explorerTabSelectedCallBack);
watchCitySearchButton(findCitiesLike);
watchCountrySearchButton(findCountriesLike);

downloadCityData('2643743', cityWeatherArrivedCallBack);
