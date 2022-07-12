import React from 'react';
import { FirebaseAppProvider } from 'reactfire';
import { I18nextProvider } from 'react-i18next';
import firebaseConfig from '../firebaseConfig';
import i18n from '../i18n';
import '../assets/styles/components/App.scss';
import Header from '../components//Header';
import About from '../components//About';
import Profile from '../components//Profile';
import Experience from '../components//Experience';
import Academic from '../components//Academic';
import Skills from '../components//Skills';
import Interest from '../components//Interest';
import Languages from '../components//Languages';

const App = () => (
    <FirebaseAppProvider firebaseConfig={firebaseConfig}>
    <I18nextProvider i18n={i18n}>
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

export default App;
