import { appAlert } from './utils';

function fetchCityWeather(url, callBack, loadStartTime) {
  fetch(url)
    .then((response) => response.json())
    .then((data) => callBack(data, loadStartTime))
    .catch((err) => appAlert('Error : '.concat(err)));
}

function downloadCityData(cityCode, callBack) {
  const loadStartTime = Date.now();

  const weatherURL = 'https://api.openweathermap.org/data/2.5/weather?id=';
  const apiCode = '&appid=a832f5712931bcd07786d24b4290543e';
  const url = weatherURL.concat(cityCode).concat(apiCode);
  fetchCityWeather(url, callBack, loadStartTime);
}

export default downloadCityData;
