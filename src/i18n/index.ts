import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import ptBR from './translations/pt-BR.json'
import enUS from './translations/en-US.json'
import esES from './translations/es-ES.json'

// the translations
// (tip move them in a JSON file and import them)
const resources = {
  'pt-BR': ptBR,
  'en-US': enUS,
  'es-ES': esES
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: 'pt-BR',

    keySeparator: false, // we do not use keys in form messages.welcome

    interpolation: {
      escapeValue: false, // react already safes from xss
    },
  });

export default i18n;
