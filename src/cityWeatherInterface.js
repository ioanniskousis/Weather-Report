import { gel, sat, gat } from './utils';

function temperatureFormat(temperatureKelvin) {
  const TEMPER_FARENEIT = 0;
  const weatherViewTemperaturePanel = document.getElementById('weatherViewTemperaturePanel');
  const temperatureUnit = parseInt(gat(weatherViewTemperaturePanel, 'temperatureUnit'), 10);
  if (temperatureUnit === TEMPER_FARENEIT) {
    return (temperatureKelvin * (9.0 / 5.0)) - 459.67;
  }
  return temperatureKelvin - 273.15;
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

function backgroundUpdate(index) {
  const imageClasses = [
    'sunShine',
    'clouds',
    'rain',
    'haze',
    'snow',
    'fog',
  ];
  const weatherBackground = gel('weatherBackground');
  weatherBackground.className = imageClasses[index];
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
    case 'fog': {
      backgroundUpdate(5);
      break;
    }
    default: {
      backgroundUpdate(0);
      break;
    }
  }
}

function renderWeather(weather) {
  const weatherView = gel('weatherView');
  const citiesTableView = gel('citiesTableView');
  const weatherViewStyle = window.getComputedStyle(weatherView);
  if (weatherViewStyle.display === 'none') {
    weatherView.style.display = 'block';
    citiesTableView.style.display = 'none';
  }
  renderWeatherHeader(weather);

  renderTemperaturePanel(parseFloat(weather.main.temp));
  renderMinMaxTemperatures(weather);
  renderWeatherDescription(weather);
}

function toggleUnits() {
  const weatherViewTemperaturePanel = document.getElementById('weatherViewTemperaturePanel');
  const temperatureUnit = parseInt(weatherViewTemperaturePanel.getAttribute('temperatureUnit'), 10);
  const newUnit = temperatureUnit === 0 ? 1 : 0;
  weatherViewTemperaturePanel.setAttribute('temperatureUnit', newUnit.toString());

  const temperatureData = parseInt(weatherViewTemperaturePanel.getAttribute('temperatureData'), 10);
  renderTemperaturePanel(temperatureData);

  const min = temperatureFormat(parseFloat(gat(gel('minContainer'), 'temperatureData')));
  const max = temperatureFormat(parseFloat(gat(gel('maxContainer'), 'temperatureData')));
  renderMin(min);
  renderMax(max);
}

function showExplorerView() {
  gel('citiesTableView').style.display = 'block';
  gel('weatherView').style.display = 'none';
}

function watchWeatherViewControls() {
  gel('temperatureToggle').addEventListener('click', () => toggleUnits());
  gel('arrowLeft').addEventListener('click', () => showExplorerView());
}

function renderLoadTime(loadStartTime) {
  const loadEndTime = Date.now();
  const loadTime = loadEndTime - loadStartTime;
  gel('responseTimeContainer').innerHTML = 'response time '.concat(loadTime.toString()).concat(' msec');
}

export {
  renderWeather,
  watchWeatherViewControls,
  renderLoadTime,
};
