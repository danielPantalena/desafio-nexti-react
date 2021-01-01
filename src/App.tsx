import React from 'react';
import { useTranslation } from 'react-i18next'
import './i18n';

import './App.css';


function App() {
  const { t } = useTranslation();
  // i18n.changeLanguage('en') // to change language
  return (
    <div className="App">
      <h1>{t('Welcome to React')}</h1>
    </div>
  );
}

export default App;
