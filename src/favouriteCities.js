const favouriteCitiesDB = (() => {
  const cities = [];

  const save = () => {
    localStorage.setItem('weatherReport-favouriteCitiesDB', JSON.stringify(cities));
  };

  const add = (city) => {
    cities.push(city);
    save();
  };

  const create = (city) => {
    const newCity = {
      id: city.id,
      name: city.name,
      country: city.country,
    };
    add(newCity);
    return newCity;
  };

  const load = () => {
    const storage = JSON.parse(localStorage.getItem('weatherReport-favouriteCitiesDB'));
    if (storage) {
      storage.forEach((city) => {
        cities.push(city);
      });
    }
  };

  const find = (id) => {
    for (let index = 0; index < cities.length; index += 1) {
      const element = cities[index];
      if (element.id === id) {
        return element;
      }
    }
    return null;
  };

  const findIndex = (id) => {
    for (let index = 0; index < cities.length; index += 1) {
      const element = cities[index];
      if (element.id === id) {
        return index;
      }
    }
    return -1;
  };

  const remove = (id) => {
    const index = findIndex(id);
    if (index !== -1) {
      const city = cities[index];
      cities.splice(index, 1);
      save();
      return city;
    }
    return null;
  };

  load();

  return {
    cities,
    load,
    add,
    create,
    remove,
    find,
  };
});

export default favouriteCitiesDB;
