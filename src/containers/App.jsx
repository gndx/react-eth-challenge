import React, { useEffect, useState } from 'react';
import { FirebaseAppProvider } from 'reactfire';
import { I18nextProvider } from 'react-i18next';
import firebaseConfig from '@/firebaseConfig';
import i18n from '@/i18n';
import getData from '@/utils/getData';
import '@/assets/styles/components/App.scss';
import Header from '@/components/Header';
import About from '@/components/About';
import Profile from '@/components/Profile';
import Experience from '@/components/Experience';
import Academic from '@/components/Academic';
import Skills from '@/components/Skills';
import Interest from '@/components/Interest';
import Languages from '@/components/Languages';

const App = () => {
  const [locales, setLocales] = useState({});

  useEffect(() => {
    (async () => {
      const locales = await getData(
        'https://00f74ba44ba0496fd6e1848b8214b1c7653e1ea58a-apidata.googleusercontent.com/download/storage/v1/b/briefcase-6e790.appspot.com/o/locales%2Fdata.json?jk=AFshE3V5LR1aLVSDLEjoBvOGG8Pkcl1eKlj4UCLqqqbJUduxb-jgN1itog_LzA7wkil3x6U_4rhf_riFFwGowBBRLR9hrKt3prPONrZ4H1t6CnJFcuSixvsEdrhiwFCNvbL8UGFUQDXdkiqWfxNqMvFSlpoaann-FCKIFeIopL23EjNRhNW9hG6L0B-ywFvUvTgV1shlqUbfyeHjglDI9HsqSf73XhoZ91HbyiweJIoZ5EyFDqxwyGsJmzgSKfxmyavbMAp-8N5sg0PrNMDqKx2HY-VAIhdhEsNWu46HtcAuZiQXV8HyCdp6wFp0OjgielYD5PkshBnAyCX3qY1M6fEDOukT_EdkymMtOVJMA3Vi4QV95uWa4QsSCHA-HGIqyBOA5wnG9rWAUvwE-uiDQeXZz-zjN2tqE48IilLhxaWHfXAVZ106dZ2EaU0Q6RmGoILTkNhjJPgC5yQeElj5kkqCfierND4gwPErmoiVQ5bsvtAmSwvfUR8adl38RRNYGkwjb_a-jgP-bifxUSr2Ro_dMj0_u8s6x8g9NVDT7MNG3RkrcHFJ4O1TTC8xtYrU0KFAXEZxCYx7Gae8Krmar_lxJW-D3zsb_317wIndkdzvPmmbirSFyXDvzbNKPzWcAfeXOLY7JjC0geb6cmM3KdQgdNkiRvb6ivEOK_h8T3yJ2GLS4Jru_dujGnkDdJ2vXPtk55Qgr6pX2bCMAmsW4ekyW0gh59GuuEDlEFKuIkdJgVkwtyi03SfwKb6-cg6C3urns1fk6YFMHOKBcfQRuUAC_gU1RchozjunstFypSHvUjWTuEoP1Jbsi9IKBSihURTrt7kWbOS_-mCsN89tkQJGtjepxOtWEJBVXGHQ8muIWcJjeVzJ8Nlg0GNkWYwfPrdG_IlsvdP9zbhRerLTvM4SaH6ZFW0CBGkBWAxx2DFp1bSp6JdsKzSQ0OLNMnIUU-ttj8EHmHomF5SYIhZwQyII45D1FbaPbORLGLOWx199ZPdWvMvj9Qs33w3nXawr5Gr7zABfeJA83o2w4SYzUitcurRct41lCfCnppGylHY&isca=1'
      );

      setLocales(locales);
    })();
  }, []);

  if (Object.keys(locales).length === 0) return <div className='w-100 h-100 d-flex justify-content-center align-items-center position-absolute'><div className="lds-ripple"><div></div><div></div></div></div> ;

  return (
    <FirebaseAppProvider firebaseConfig={firebaseConfig}>
    <I18nextProvider i18n={i18n(locales)}>
      <div className="app-container d-flex flex-column position-relative">
        <Header>
          <Profile />
        </Header>
        <div className="info-container d-flex flex-row flex-wrap align-items-stretch justify-content-between position-relative p-4">
          <About />
          <Experience />
          <Academic />
          <Skills />
          <Interest />
          <Languages />
        </div>
      </div>
    </I18nextProvider>
  </FirebaseAppProvider>
  );
};

export default App;
