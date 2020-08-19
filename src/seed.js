const city1 = {
  id: 264371,
  name: 'Athens',
  country: 'GR',
};

const city2 = {
  id: 3169070,
  name: 'Rome',
  country: 'IT',
};

const city3 = {
  id: 2968815,
  name: 'Paris',
  country: 'FR',
};

const city4 = {
  id: 2950158,
  name: 'Berlin',
  country: 'DE',
};

const city5 = {
  id: 2643743,
  name: 'London',
  country: 'GB',
};


function seed(cities) {
  cities.add(city1);
  cities.add(city2);
  cities.add(city3);
  cities.add(city4);
  cities.add(city5);
}

export default seed;
