import React, { useState } from 'react';
import { BiMenu } from 'react-icons/bi';
import { CgDarkMode } from 'react-icons/cg';
import { useTranslation } from 'react-i18next';

import { SelectLanguage, ThemeButton } from '../../components';
import { FlexRow } from '../../styled-components';

import './style.css';

interface IProps {
  theme: string;
  toggleTheme: { (): void };
  showDropdownMenu: boolean;
  setShowDropdownMenu: { (showMenu: boolean): void };
}

const Header: React.FC<IProps> = ({
  theme,
  toggleTheme,
  showDropdownMenu,
  setShowDropdownMenu,
}) => {
  const { t } = useTranslation();
  const [themeMode, setThemeMode] = useState(theme);

  const handleDropdownMenu = () => setShowDropdownMenu(!showDropdownMenu);

  const handleTheme = () => {
    toggleTheme();
  };

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
            <li>{t('Logout')}</li>
            <li onClick={handleTheme}>
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
