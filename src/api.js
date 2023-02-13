function getMeals() {
  return fetch('www.themealdb.com/api/json/v1/1/categories.php').then((res) =>
    res.json()
  );
}

export default getMeals;
