import { useState, useEffect } from 'react';
import images from '../data/meals';

function useCarousel(defaultVal = null) {
  const [index, setIndex] = useState(defaultVal);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    }, 10000);

    return () => clearInterval(intervalId);
  }, []);

  return { index, setIndex };
}

export default useCarousel;
