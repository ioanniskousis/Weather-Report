import '../resources/stylesheets/style.css';
import getCities from './citiesDB';
import getCountries from './countriesDB';

import { gel, crel, appAlert, gat, sat } from './utils';
import favouriteCitiesDB from './favouriteCities';
import seed from './seed';

// const fromIndex = 2001;
// const toIndex = 2200;
let citiesTB = null;
let countriesTB = null;
let loadStartTime = 0;

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
  const row = crel('div');
  row.setAttribute('datafield', 'country');
  row.setAttribute('countrycode', country.code);
  row.className = 'citiesTableRow';
  const countryName = crel('div');
  countryName.innerHTML = country.name;

  const countryCode = crel('div');
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

function temperatureFormat(temperatureKelvin) {
  const weatherViewTemperaturePanel = document.getElementById('weatherViewTemperaturePanel');
  const temperatureUnit = parseInt(gat(weatherViewTemperaturePanel, 'temperatureUnit'), 10);
  if (temperatureUnit === TEMPER_FARENEIT) {
    return (temperatureKelvin * (9.0 / 5.0)) - 459.67;
  }
  return temperatureKelvin - 273.15;

}

function renderTemperaturePanel(temperatureKelvin) {
  const weatherViewTemperaturePanel = document.getElementById('weatherViewTemperaturePanel');
  const temperatureUnit = parseInt(gat(weatherViewTemperaturePanel, 'temperatureUnit'), 10);
  const span = temperatureUnit === 0 ? '<span>&deg;F</span>' : '<span>&deg;C</span>';
  sat(weatherViewTemperaturePanel, 'temperatureData', temperatureKelvin.toString());
  const tempFormated = parseInt(temperatureFormat(temperatureKelvin), 10).toString().concat(span);
  weatherViewTemperaturePanel.innerHTML = tempFormated;
}

function renderWeatherHeader(weather) {
  const city = weather.name;
  const cityLab = gel('weatherCityName');
  cityLab.innerHTML = city;
}

function renderRawData(weather) {
  const allData = document.getElementById('allData');
  allData.innerHTML = 'Data : '.concat(JSON.stringify(weather));
}

function renderMin(min) {
  gel('minContainer').innerHTML = 'min : '.concat(min.toFixed(2));
}

function renderMax(max) {
  gel('maxContainer').innerHTML = 'max : '.concat(max.toFixed(2));
}

function renderMinMaxTemperatures(weather) {
  const min = temperatureFormat(parseFloat(weather.main.temp_min));
  const max = temperatureFormat(parseFloat(weather.main.temp_max));
  sat(gel('minContainer'), 'temperatureData', weather.main.temp_min);
  sat(gel('maxContainer'), 'temperatureData', weather.main.temp_max);

  renderMin(min);
  renderMax(max);
}

function backgroundUpdate(index) {
  const images = [
    'sunshine.jpg',
    'clouds-scattered.jpg',
    'rain.jpg',
    'haze.png',
    'snow.jpg',
  ];

  const weatherBackground = gel('weatherBackground');
  const url = '../resources/images/'.concat(images[index]);
  weatherBackground.style.backgroundImage = 'url(\''.concat(url).concat('\')');
}

function renderWeatherDescription(weather) {
  const weatherMain = gel('weatherMain');
  const weatherDescription = gel('weatherDescription');
  const wmain = weather.weather[0].main;
  const wdes = weather.weather[0].description;
  weatherMain.innerHTML = wmain;
  weatherDescription.innerHTML = wdes;

  const wmainLow = wmain.toLowerCase();
  switch (wmainLow) {
    case 'clouds': {
      backgroundUpdate(1);
      break;
    }
    case 'rain': {
      backgroundUpdate(2);
      break;
    }
    case 'haze': {
      backgroundUpdate(3);
      break;
    }
    case 'snow': {
      backgroundUpdate(4);
      break;
    }
    default: {
      backgroundUpdate(0);
      break;
    }
  }
}

function renderLoadTime() {
  const loadEndTime = Date.now();
  const loadTime = loadEndTime - loadStartTime;
  gel('responseTimeContainer').innerHTML = 'response time '.concat(loadTime.toString()).concat(' msec');
}

function renderWeather(weather) {
  renderLoadTime();
  const weatherView = gel('weatherView');
  const citiesTableView = gel('citiesTableView');
  const weatherViewStyle = window.getComputedStyle(weatherView);
  if (weatherViewStyle.display === 'none') {
    weatherView.style.display = 'block';
    citiesTableView.style.display = 'none';
  }
  renderWeatherHeader(weather);
  // renderRawData(weather);

  renderTemperaturePanel(parseFloat(weather.main.temp));
  renderMinMaxTemperatures(weather);
  renderWeatherDescription(weather);

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
  loadStartTime = Date.now();

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

  const min = temperatureFormat(parseFloat(gat(gel('minContainer'), 'temperatureData')));
  const max = temperatureFormat(parseFloat(gat(gel('maxContainer'), 'temperatureData')));
  renderMin(min);
  renderMax(max);
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


function listenToBackArrow() {
  const arrow = gel('arrowLeft');
  arrow.addEventListener('click', () => {
    gel('citiesTableView').style.display = 'block';
    gel('weatherView').style.display = 'none';
  });
}
listenToBackArrow();
