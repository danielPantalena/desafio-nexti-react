import React from 'react';
import { BiMenu } from 'react-icons/bi';
import { useTranslation } from 'react-i18next';

import { SelectLanguage, ThemeButton } from '../../components';
import { FlexRow } from '../../styled-components';

import './style.css';

interface IProps {
  loggedIn: boolean;
  theme: string;
  toggleTheme: { (): void };
  showDropdownMenu: boolean;
  setShowDropdownMenu: { (showMenu: boolean): void };
  handleLogout: { (): void };
}

const Header: React.FC<IProps> = ({
  loggedIn,
  theme,
  toggleTheme,
  showDropdownMenu,
  setShowDropdownMenu,
  handleLogout,
}) => {
  const { t } = useTranslation();

  const handleDropdownMenu = () => setShowDropdownMenu(!showDropdownMenu);

  return (
    <>
      <header>
        <FlexRow>
          <BiMenu size={42} />
          <nav className="navigator">
            <ul className="nav-list">
              <li>
                <a href="https://bitbucket.org/presenca/desafio-nexti-react/src/master/">
                  {t('Help')}
                </a>
              </li>
              <li onClick={handleDropdownMenu}>{t('Settings')}</li>
            </ul>
          </nav>
        </FlexRow>
      </header>
      {showDropdownMenu && (
        <div className="dropdown-menu">
          <ul>
            {loggedIn && <li onClick={handleLogout}>{t('Logout')}</li>}
            <li onClick={toggleTheme}>
              {t(theme)}
              <ThemeButton theme={theme} />
            </li>
            <li>
              <SelectLanguage />
            </li>
          </ul>
        </div>
      )}
    </>
  );
};

export default Header;
