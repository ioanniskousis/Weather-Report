import '../resources/stylesheets/style.css';
import { getCities, findCities } from './citiesDB';
import { getCountries, findCountries } from './countriesDB';
import renderCountries from './countriesInterface';
import renderCities from './citiesInterface';
import { renderWeather, addWeatherListeners, renderLoadTime } from './cityWeatherInterface';
import downloadCityData from './weatherAPI';
import { gel } from './utils';
import favouriteCitiesDB from './favouriteCities';
import seed from './seed';

const favouriteCities = favouriteCitiesDB();
if (favouriteCities.cities.length === 0) seed(favouriteCities);

let citiesTB = null;
let countriesTB = null;

function citiesDatabaseArrived(cities) {
  citiesTB = cities;
}

function countriesDatabaseArrived(countries) {
  countriesTB = countries;
}

function cityWeatherArrived(data, startTime) {
  renderLoadTime(startTime);
  renderWeather(data);
}

function citySelected(cityCode) {
  downloadCityData(cityCode, cityWeatherArrived);
}

function resize() {
  if (window.innerWidth > 768) {
    gel('citiesTableView').style.display = 'block';
    gel('weatherView').style.display = 'block';
  } else {
    gel('citiesTableView').style.display = 'block';
    gel('weatherView').style.display = 'none';
  }
}

function resetCityTabs(citiesTabs, index) {
  for (let i = 0; i < citiesTabs.length; i += 1) {
    const element = citiesTabs[i];
    element.className = 'citiesTab';
  }
  if (index > -1) citiesTabs[index].className = 'citiesTab citiesTabSelected';
}

function loadCountryCities(code) {
  const countryCities = [];
  for (let index = 0; index < citiesTB.length; index += 1) {
    const element = citiesTB[index];
    if (element.country === code) {
      countryCities.push(element);
    }
  }
  const citiesTabs = document.getElementsByClassName('citiesTab');
  resetCityTabs(citiesTabs, 1);
  renderCities(countryCities, citySelected);
}

function selectCityTab(citiesTabs, index) {
  resetCityTabs(citiesTabs, index);

  switch (index) {
    case 0: {
      renderCities(favouriteCities.cities, citySelected);
      break;
    }
    case 1: {
      renderCities(citiesTB, citySelected);
      break;
    }
    case 2: {
      renderCountries(countriesTB, loadCountryCities);
      break;
    }
    default:
      break;
  }
}

function addListeners() {
  addWeatherListeners();

  const citiesTabs = document.getElementsByClassName('citiesTab');
  for (let index = 0; index < citiesTabs.length; index += 1) {
    const element = citiesTabs[index];
    element.addEventListener('click', () => {
      selectCityTab(citiesTabs, index);
    });
  }

  gel('searchCityButton').addEventListener('click', () => {
    const tabs = document.getElementsByClassName('citiesTab');
    resetCityTabs(tabs, 1);
    const searchCityInput = gel('searchCityInput');
    const srcCities = findCities(citiesTB, searchCityInput.value);
    renderCities(srcCities, citySelected);
  });

  gel('searchCountryButton').addEventListener('click', () => {
    const tabs = document.getElementsByClassName('citiesTab');
    resetCityTabs(tabs, 2);
    const searchCountryInput = gel('searchCountryInput');
    const srcCountries = findCountries(countriesTB, searchCountryInput.value);
    renderCountries(srcCountries, loadCountryCities);
  });

  window.addEventListener('resize', () => {
    resize();
  });

  window.addEventListener('load', () => {
    resize();
  });
}

getCities(citiesDatabaseArrived);
getCountries(countriesDatabaseArrived);
renderCities(favouriteCities.cities, citySelected);
addListeners();
downloadCityData('2643743', cityWeatherArrived);
