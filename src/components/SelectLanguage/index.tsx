import React from 'react';
import { useTranslation } from 'react-i18next';
import i18n from '../../i18n';

const SelectLanguage = () => {
  const { t } = useTranslation();

  const handleLanguage = (event: React.ChangeEvent<HTMLSelectElement>) =>
    i18n.changeLanguage(event?.target?.value ?? '');

  return (
    <select onChange={handleLanguage}>
      <option value="">{t('Language')}</option>
      <option value="pt-BR">{t('Portuguese')}</option>
      <option value="en-US">{t('English')}</option>
      <option value="es-ES">{t('Spanish')}</option>
    </select>
  );
};

export default SelectLanguage;
