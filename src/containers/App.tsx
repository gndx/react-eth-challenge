import React, { useEffect, useState } from 'react';
import { I18nextProvider } from 'react-i18next';
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
  const [locales, setLocales] = useState<object>({});

  useEffect(() => {
    (async () => {
      const translationEN = await getData(
        'https://firebasestorage.googleapis.com/v0/b/briefcase-6e790.appspot.com/o/locales%2Fen%2Ftranslation.json?alt=media'
      );
      const translationES = await getData(
        'https://firebasestorage.googleapis.com/v0/b/briefcase-6e790.appspot.com/o/locales%2Fes%2Ftranslation.json?alt=media'
      );

      setLocales({
        en: { translation: translationEN },
        es: { translation: translationES }
      });
    })();
  }, []);

  if (Object.keys(locales).length === 0) return <div>Loading</div>;

  return (
    <I18nextProvider i18n={i18n(locales)}>
      <div className="d-flex flex-row position-relative">
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
  );
};

export default App;
