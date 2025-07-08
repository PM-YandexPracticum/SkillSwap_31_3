export const getUniqCities = (data) => {
  const allCities = data.map((user) => user.city);
  const uniqCities = allCities.filter(
    (value, index, self) => self.indexOf(value) === index
  );
  return uniqCities.map((city) => ({ value: city }));
};
