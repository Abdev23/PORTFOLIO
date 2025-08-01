
import { createContext, useEffect, useState } from 'react';

import { useLocalStorage } from '../hooks';


const getInitialTheme = () => {
  const storedTheme = localStorage.getItem('theme');  
  if (storedTheme) {
    return JSON.parse(storedTheme);
  }

  const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
  if (prefersDark) {
    return 'dark';
  }

  return 'light';
};

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [initialTheme] = useState(getInitialTheme);
  const [theme, setTheme] = useLocalStorage('theme', initialTheme);

  useEffect(() => {    
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  const value = { theme, setTheme };

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
};