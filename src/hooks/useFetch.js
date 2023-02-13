/* eslint-disable no-console */
import { useEffect, useState } from 'react';
import getMeals from '../api';

function useFetch() {
  const [meals, setMeals] = useState();

  useEffect(() => {
    getMeals().then((res) => console.log(res));
  }, []);

  return { meals, setMeals };
}

export default useFetch;
