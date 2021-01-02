import React, { useState } from 'react';
import { BiMenu } from 'react-icons/bi';
import { CgDarkMode } from 'react-icons/cg';
import { useTranslation } from 'react-i18next';

import { SelectLanguage } from '../../components';
import { FlexRow } from '../../styled-components';

import './style.css';

interface IProps {
  toggleTheme: { (): void };
}

const Header: React.FC<IProps> = ({ toggleTheme }) => {
  const [showMenu, setShowMenu] = useState(true);

  const { t } = useTranslation();
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
              <li>{t('Settings')}</li>
            </ul>
          </nav>
        </FlexRow>
      </header>
      {showMenu && (
        <div className="dropdown-menu">
          <ul>
            <li>{t('Logout')}</li>
            <li onClick={toggleTheme}>
              {t('Theme')} <CgDarkMode />
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
