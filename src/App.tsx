import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme, GlobalStyles } from './themes';

import './i18n';

import './App.css';

function App() {
  const { t } = useTranslation();
  // i18n.changeLanguage('en') // to change language
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => setTheme(theme === 'light' ? 'dark' : 'light');

  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <GlobalStyles />
      <div className="App">
        <h1>{t('Welcome to React')}</h1>
        <button onClick={toggleTheme}>Change Theme</button>
      </div>
    </ThemeProvider>
  );
}

export default App;
