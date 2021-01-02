import React from 'react';
import { BiMenu } from 'react-icons/bi';
import { useTranslation } from 'react-i18next';

import { FlexRow } from '../../styled-components';

import './style.css';

const Header = () => {
  const { t } = useTranslation();
  return (
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
  );
};

export default Header;
