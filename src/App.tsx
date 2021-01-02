import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme, GlobalStyles } from './themes';
import Login from './screens/Login/Login';
import { Header, SelectLanguage } from './components';
import './App.css';

function App() {
  const { t } = useTranslation();
  const [loggedIn, setLoggedIn] = useState(false);
  const [theme, setTheme] = useState('light');
  const [showDropdownMenu, setShowDropdownMenu] = useState(false);

  const toggleTheme = () => setTheme(theme === 'light' ? 'dark' : 'light');

  const handleClickOutsideDropdownMenu = () => setShowDropdownMenu(false);

  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <GlobalStyles />
      <Header
        toggleTheme={toggleTheme}
        theme={theme}
        showDropdownMenu={showDropdownMenu}
        setShowDropdownMenu={setShowDropdownMenu}
      />
      <div className="App" onClick={handleClickOutsideDropdownMenu}>
        <button onClick={toggleTheme}>Change Theme</button>
        <SelectLanguage />
        {loggedIn ? <h1>{t('Welcome to React')}</h1> : <Login setLoggedIn={setLoggedIn} />}
      </div>
    </ThemeProvider>
  );
}

export default App;
