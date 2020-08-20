import { appAlert } from './utils';

async function fetchCityWeather(url, callBack, loadStartTime) {
  await fetch(url)
    .then((response) => response.json())
    .then((data) => callBack(data, loadStartTime))
    .catch((err) => appAlert('Error : '.concat(err)));
}

function downloadCityData(cityCode, callBack) {
  const loadStartTime = Date.now();
  const weatherURL = 'https://api.openweathermap.org/data/2.5/weather?id=';
  const apiCode = '&appid=<api-key>';
  const url = weatherURL.concat(cityCode).concat(apiCode);
  fetchCityWeather(url, callBack, loadStartTime);
}

export default downloadCityData;
