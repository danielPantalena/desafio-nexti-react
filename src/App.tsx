import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme, GlobalStyles } from './themes';

import './i18n';

import './App.css';
import Login from './screens/Login/Login';
import i18n from './i18n';

function App() {
  const { t } = useTranslation();
  // i18n.changeLanguage('en') // to change language
  const [loggedIn, setLoggedIn] = useState(false);
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => setTheme(theme === 'light' ? 'dark' : 'light');

  const handleLanguage = (event: React.ChangeEvent<HTMLSelectElement>) =>
    i18n.changeLanguage(event?.target?.value ?? '');

  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <GlobalStyles />
      <div className="App">
        <button onClick={toggleTheme}>Change Theme</button>
        <select onChange={handleLanguage}>
          <option value="">{t('Language')}</option>
          <option value="pt-BR">{t('Portuguese')}</option>
          <option value="en-US">{t('English')}</option>
          <option value="es-ES">{t('Spanish')}</option>
        </select>
        {loggedIn ? <h1>{t('Welcome to React')}</h1> : <Login setLoggedIn={setLoggedIn} />}
      </div>
    </ThemeProvider>
  );
}

export default App;
