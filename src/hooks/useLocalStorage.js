import { useEffect } from 'react';

function useLocalStorage(data) {
  useEffect(() => {
    localStorage.setItem('dataKey', JSON.stringify(data));
  }, [data]);
}

export default useLocalStorage;
