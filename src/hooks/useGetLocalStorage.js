/* eslint-disable no-console */
import { useEffect, useState } from 'react';

export default function getLocalStorage() {
  const [userName, setUserName] = useState();

  useEffect(() => {
    const savedItem = localStorage.getItem('dataKey');
    const parsedItem = JSON.parse(savedItem);
    console.log(parsedItem);
    setUserName(parsedItem || '');
  }, []);

  return [userName, setUserName];
}
