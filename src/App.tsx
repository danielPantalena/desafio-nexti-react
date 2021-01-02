import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme, GlobalStyles } from './themes';
import { Login, Main } from './screens';
import { Header } from './components';
import './App.css';

interface IUser {
  firstName: string;
  lastName: string;
  id: number;
}

function App() {
  const { t } = useTranslation();
  const [loggedIn, setLoggedIn] = useState(false);
  const [userData, setUserData] = useState<IUser>({ firstName: '', lastName: '', id: 0 });
  const [theme, setTheme] = useState('light');
  const [showDropdownMenu, setShowDropdownMenu] = useState(false);

  const toggleTheme = () => setTheme(theme === 'light' ? 'dark' : 'light');

  const handleClickOutsideDropdownMenu = () => setShowDropdownMenu(false);

  const handleLogin = (userData: IUser) => {
    setLoggedIn(true);
    setUserData(userData);
  };

  const handleLogout = () => setLoggedIn(false);

  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <GlobalStyles />
      <Header
        toggleTheme={toggleTheme}
        theme={theme}
        showDropdownMenu={showDropdownMenu}
        setShowDropdownMenu={setShowDropdownMenu}
        loggedIn={loggedIn}
        handleLogout={handleLogout}
      />
      <div className="App" onClick={handleClickOutsideDropdownMenu}>
        {loggedIn ? <Main /> : <Login handleLogin={handleLogin} />}
      </div>
    </ThemeProvider>
  );
}

export default App;
