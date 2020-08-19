import '../resources/stylesheets/style.css';
import getCities from './citiesDB';
import getCountries from './countriesDB';

import { gel, appAlert } from './utils';
import favouriteCitiesDB from './favouriteCities';
import seed from './seed';

// const fromIndex = 2001;
// const toIndex = 2200;
let citiesTB = null;
let countriesTB = null;

function showSearchSource(index) {
  gel('searchCity').style.visibility = (index === 0 ? 'visible' : 'hidden');
  gel('searchCity').style.display = (index === 0 ? 'flex' : 'none');
  gel('searchCountry').style.visibility = (index === 1 ? 'visible' : 'hidden');
  gel('searchCountry').style.display = (index === 1 ? 'flex' : 'none');
}

localStorage.removeItem('weatherReport-favouriteCitiesDB');
const favouriteCities = favouriteCitiesDB();
if (favouriteCities.cities.length === 0) seed(favouriteCities);

const TEMPER_FARENEIT = 0;
const TEMPER_CELCIUS = 1;

function renderCity(city) {
  const citiesTableBody = document.getElementById('citiesTableBody');
  if (city.country) {
    const row = document.createElement('div');
    row.setAttribute('datafield', 'city');
    row.setAttribute('citycode', city.id);
    row.className = 'citiesTableRow';
    const cityName = document.createElement('div');
    cityName.innerHTML = city.name;

    const countryName = document.createElement('div');
    countryName.innerHTML = city.country;

    row.appendChild(cityName);
    row.appendChild(countryName);
    citiesTableBody.appendChild(row);

    row.addEventListener('click', () => {
      const weatherView = gel('weatherView');
      const visible = weatherView.style.visibility === 'visible';
      if (!visible) {
        gel('citiesTableView').style.display = 'none';
        gel('weatherView').style.display = 'block';
        gel('citiesTableView').style.visibility = 'hidden';
        gel('weatherView').style.visibility = 'visible';
      }
      const cityCode = row.getAttribute('citycode');
      // eslint-disable-next-line no-use-before-define
      loadCityData(cityCode);
    });
  }
}

function renderCities(cities) {
  showSearchSource(0);
  const citiesTableBody = document.getElementById('citiesTableBody');
  citiesTableBody.innerHTML = '';
  citiesTableBody.scrollTo(0, 0);
  const limit = cities.length > 100 ? 100 : cities.length;
  for (let index = 0; index < limit; index += 1) {
    renderCity(cities[index]);
  }
}

function renderCountry(country) {
  const citiesTableBody = document.getElementById('citiesTableBody');
  const row = document.createElement('div');
  row.setAttribute('datafield', 'country');
  row.setAttribute('countrycode', country.code);
  row.className = 'citiesTableRow';
  const countryName = document.createElement('div');
  countryName.innerHTML = country.name;

  const countryCode = document.createElement('div');
  countryCode.innerHTML = country.code;

  row.appendChild(countryName);
  row.appendChild(countryCode);
  citiesTableBody.appendChild(row);

  row.addEventListener('click', () => {
    // eslint-disable-next-line no-use-before-define
    loadCountryCities(country.code);
  });
}

function loadCountryCities(code) {
  showSearchSource(0);
  const countryCities = [];
  for (let index = 0; index < citiesTB.length; index += 1) {
    const element = citiesTB[index];
    if (element.country === code) {
      countryCities.push(element);
    }
  }
  const citiesTabs = document.getElementsByClassName('citiesTab');
  // eslint-disable-next-line no-use-before-define
  resetCityTabs(citiesTabs, 1);
  renderCities(countryCities);
}

function renderCountries(countries) {
  showSearchSource(1);
  const citiesTableBody = document.getElementById('citiesTableBody');
  citiesTableBody.innerHTML = '';
  citiesTableBody.scrollTo(0, 0);
  for (let index = 0; index < countries.length; index += 1) {
    renderCountry(countries[index]);
  }
}

renderCities(favouriteCities.cities);

function setCitiesTable(cities) {
  citiesTB = cities;
}

function setCountriesTable(countries) {
  countriesTB = countries;
}

getCities(setCitiesTable);
getCountries(setCountriesTable);

function renderTemperaturePanel(temperatureData) {
  const weatherViewTemperaturePanel = document.getElementById('weatherViewTemperaturePanel');
  weatherViewTemperaturePanel.setAttribute('temperatureData', temperatureData.toString());
  const temperatureUnit = parseInt(weatherViewTemperaturePanel.getAttribute('temperatureUnit'), 10);
  if (temperatureUnit === TEMPER_FARENEIT) {
    const temperature = (temperatureData * (9.0 / 5.0)) - 459.67;
    weatherViewTemperaturePanel.innerHTML = parseInt(temperature, 10).toString().concat('<span>&deg;F</span>');
  } else if (temperatureUnit === TEMPER_CELCIUS) {
    const temperature = temperatureData - 273.15;
    weatherViewTemperaturePanel.innerHTML = parseInt(temperature, 10).toString().concat('<span>&deg;C</span>');
  }
}

function renderWeatherHeader(weather) {
  // const weatherViewHeader = document.getElementById('weatherViewHeader');
  // weatherViewHeader.innerHTML = '';
  const city = weather.name;
  const cityLab = gel('weatherCityName');
  cityLab.innerHTML = city;
  // weatherViewHeader.appendChild(cityLab);
}

function renderRawData(weather) {
  const allData = document.getElementById('allData');
  allData.innerHTML = 'Data : '.concat(JSON.stringify(weather));
}

function renderWeather(weather) {
  renderWeatherHeader(weather);
  renderRawData(weather);

  renderTemperaturePanel(parseFloat(weather.main.temp));

}

function fetchCityWeather(url) {
  fetch(url)
    .then((response) => response.json())
    .then((data) => renderWeather(data))
    .catch((err) => appAlert('Error : '.concat(err)));
}
// const wURL = 'https://api.openweathermap.org/data/2.5/weather?q=London,uk&appid=a832f5712931bcd07786d24b4290543e';
// const wURL = 'https://api.openweathermap.org/data/2.5/weather?id=1006919&appid=a832f5712931bcd07786d24b4290543e';
// fetchCityWeather(wURL);

function loadCityData(cityCode) {
  const weatherURL = 'https://api.openweathermap.org/data/2.5/weather?id=';
  const apiCode = '&appid=a832f5712931bcd07786d24b4290543e';
  const url = weatherURL.concat(cityCode).concat(apiCode);
  fetchCityWeather(url);
}

loadCityData('2643743');

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

gel('temperatureToggle').addEventListener('click', () => {
  const weatherViewTemperaturePanel = document.getElementById('weatherViewTemperaturePanel');
  const temperatureUnit = parseInt(weatherViewTemperaturePanel.getAttribute('temperatureUnit'), 10);
  const newTemperatureUnit = temperatureUnit === TEMPER_FARENEIT ? TEMPER_CELCIUS : TEMPER_FARENEIT;
  weatherViewTemperaturePanel.setAttribute('temperatureUnit', newTemperatureUnit.toString());

  const temperatureData = parseInt(weatherViewTemperaturePanel.getAttribute('temperatureData'), 10);
  renderTemperaturePanel(temperatureData);
});

function findCities(src) {
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

function findCountries(src) {
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

function resetCityTabs(citiesTabs, index) {
  for (let i = 0; i < citiesTabs.length; i += 1) {
    const element = citiesTabs[i];
    element.className = 'citiesTab';
  }
  if (index > -1) citiesTabs[index].className = 'citiesTab citiesTabSelected';
}

function selectCityTab(citiesTabs, index) {
  resetCityTabs(citiesTabs, index);

  switch (index) {
    case 0: {
      renderCities(favouriteCities.cities);
      break;
    }
    case 1: {
      renderCities(citiesTB);
      break;
    }
    case 2: {
      renderCountries(countriesTB);
      break;
    }
    default:
      break;
  }
}

function citiesTabsLiseners() {
  const citiesTabs = document.getElementsByClassName('citiesTab');
  for (let index = 0; index < citiesTabs.length; index += 1) {
    const element = citiesTabs[index];
    element.addEventListener('click', () => {
      selectCityTab(citiesTabs, index);
    });
  }
}
citiesTabsLiseners();

gel('searchCityButton').addEventListener('click', () => {
  const tabs = document.getElementsByClassName('citiesTab');
  resetCityTabs(tabs, 1);
  const searchCityInput = gel('searchCityInput');
  const srcCities = findCities(searchCityInput.value);
  renderCities(srcCities);
});

gel('searchCountryButton').addEventListener('click', () => {
  const tabs = document.getElementsByClassName('citiesTab');
  resetCityTabs(tabs, 2);
  const searchCountryInput = gel('searchCountryInput');
  const srcCountries = findCountries(searchCountryInput.value);
  renderCountries(srcCountries);
});