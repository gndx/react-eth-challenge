import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import locales from '@/locales/Locales';
//import getData from '@/utils/getData';

/* const getLocales = async (): Promise<Object> => {
  const en = await getData(
    'https://firebasestorage.googleapis.com/v0/b/briefcase-6e790.appspot.com/o/locales/en/translation.json?alt=media'
  );
  const es = await getData(
    'https://firebasestorage.googleapis.com/v0/b/briefcase-6e790.appspot.com/o/locales/es/translation.json?alt=media'
  );

  return {
    en,
    es
  };
};
const resources: Object = await getLocales(); */

const i18nInit = (resources: any) => {
  i18n
    .use(initReactI18next) // passes i18n down to react-i18next
    .init({
      // the translations
      // (tip move them in a JSON file and import them,
      // or even better, manage them via a UI: https://react.i18next.com/guides/multiple-translation-files#manage-your-translations-with-a-management-gui)
      resources,
      lng: 'en', // if you're using a language detector, do not define the lng option
      fallbackLng: 'en',

      interpolation: {
        escapeValue: false // react already safes from xss => https://www.i18next.com/translation-function/interpolation#unescape
      }
    });
  return i18n;
};

export default i18nInit;
