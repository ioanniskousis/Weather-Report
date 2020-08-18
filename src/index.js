import '../resources/stylesheets/style.css';
import getCities from './citiesDB';
import { gel, appAlert } from './utils';
import favouriteCitiesDB from './favouriteCities';
import seed from './seed';

// const fromIndex = 2001;
// const toIndex = 2200;
let citiesTB = null;

// localStorage.removeItem('weatherReport-favouriteCitiesDB');
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
      const cityCode = row.getAttribute('citycode');
      // eslint-disable-next-line no-use-before-define
      loadCityData(cityCode);
    });
  }
}

function renderFavouriteCities(cities) {
  for (let index = 0; index < cities.length; index += 1) {
    renderCity(cities[index]);
  }
}

renderFavouriteCities(favouriteCities.cities);

function setCitiesTable(cities) {
  citiesTB = cities;
}

getCities(setCitiesTable);

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

function renderWeather(weather) {
  const weatherViewHeader = document.getElementById('weatherViewHeader');
  weatherViewHeader.innerHTML = '';
  const city = document.createElement('p');
  city.innerHTML = weather.name;
  weatherViewHeader.appendChild(city);

  const allData = document.getElementById('allData');
  allData.innerHTML = 'Data : '.concat(JSON.stringify(weather));

  renderTemperaturePanel(parseFloat(weather.main.temp));


  // const fahrenheit = parseInt((temperature * (9.0 / 5.0)) - 459.67, 10).toString();
  // const celcius = parseInt(temperature - 273.15, 10);
  // const temper = fahrenheit.concat('<br/>').concat(celcius);
  // weatherViewTemperaturePanel.innerHTML = temper;
}

function fetchURL(url) {
  fetch(url)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      renderWeather(data);
    })
    .catch((err) => {
      appAlert('Error : '.concat(err));
    });
}
// const wURL = 'https://api.openweathermap.org/data/2.5/weather?q=London,uk&appid=a832f5712931bcd07786d24b4290543e';
// const wURL = 'https://api.openweathermap.org/data/2.5/weather?id=1006919&appid=a832f5712931bcd07786d24b4290543e';
// fetchURL(wURL);

function loadCityData(cityCode) {
  const weatherURL = 'https://api.openweathermap.org/data/2.5/weather?id=';
  const apiCode = '&appid=a832f5712931bcd07786d24b4290543e';
  const url = weatherURL.concat(cityCode).concat(apiCode);
  fetchURL(url);
}

loadCityData('2643743');

function resize() {
  if (window.innerWidth > 768) {
    // gel('projectsSideBar').style.display = 'block';
    // gel('todosView').style.display = 'block';
  } else {
    // gel('projectsSideBar').style.display = 'block';
    // gel('todosView').style.display = 'none';
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