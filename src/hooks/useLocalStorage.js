import { useEffect } from 'react';

function useLocalStorage(data) {
  useEffect(() => {
    localStorage.setItem('movieKey', JSON.stringify(data));
  }, []);
}

export default useLocalStorage;
