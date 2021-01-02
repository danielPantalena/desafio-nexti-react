import React, { useState } from 'react';
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
    <div className="App">
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
        <div onClick={handleClickOutsideDropdownMenu}>
          {loggedIn ? <Main userData={userData} /> : <Login handleLogin={handleLogin} />}
        </div>
      </ThemeProvider>
    </div>
  );
}

export default App;
