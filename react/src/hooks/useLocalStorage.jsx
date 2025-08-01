
import { useState, useEffect } from 'react';


function getStoredValue(key, initialValue) {
  const storedValue = localStorage.getItem(key);
  if (storedValue) {
    try {
      return JSON.parse(storedValue);
    }
    catch (error) {
      console.error(`Error parsing localStorage key “${key}”:`, error);
      return initialValue;
    }
  }
  return initialValue;
}

export const useLocalStorage = (key, initialValue) => {
  const [value, setValue] = useState(() => {
    return getStoredValue(key, initialValue);
  });

  useEffect(() => {
    try {
      localStorage.setItem(key, JSON.stringify(value));
    }
    catch (error) {
      console.error(`Error setting localStorage key “${key}”:`, error);
    }
  }, [key, value]);

  return [value, setValue];
};