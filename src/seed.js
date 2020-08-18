const city1 = {
  id: 4232323,
  name: 'Athens',
  country: 'GR',
};

const city2 = {
  id: 1342323,
  name: 'Rome',
  country: 'IT',
};

const city3 = {
  id: 23645654654,
  name: 'Peris',
  country: 'FR',
};

const city4 = {
  id: 3454543,
  name: 'Berlin',
  country: 'DE',
};

function seed(cities) {
  alert('hi');
  cities.add(city1);
  cities.add(city2);
  cities.add(city3);
  cities.add(city4);
}

export default seed;
