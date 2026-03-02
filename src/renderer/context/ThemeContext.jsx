import React, { createContext, useContext, useState, useEffect } from 'react';

const ThemeContext = createContext(null);

const THEMES = {
  dark: 'vs-dark',
  light: 'vs',
  hc: 'hc-black'
};

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('deepiri_theme') || 'dark';
  });

  useEffect(() => {
    localStorage.setItem('deepiri_theme', theme);
    document.documentElement.setAttribute('data-theme', theme);
    document.body.classList.remove('theme-dark', 'theme-light', 'theme-hc');
    document.body.classList.add(`theme-${theme}`);
  }, [theme]);

  const monacoTheme = THEMES[theme] || THEMES.dark;

  return (
    <ThemeContext.Provider value={{ theme, setTheme, monacoTheme, themeOptions: Object.keys(THEMES) }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error('useTheme must be used within ThemeProvider');
  return ctx;
}
