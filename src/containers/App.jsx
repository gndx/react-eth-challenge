import React from 'react';
import "./App.scss";
import Header from '../components/Header/Header';
import About from '../components/About/About';
import Profile from '../components/Profile/Profile';
import Experience from '../components/Experience/Experience';
import Academic from '../components/Academic/Academic';
import Skills from '../components/Skills/Skills';
import Interest from '../components/Interest/Interest';
import Languages from '../components/Languages/Languages';
import { AppProvider } from '../components/AppContext';
import { AppContext } from '../components/AppContext';

const App = () => {

  return (

    <AppProvider>
      <main className="cv-container">
        <Header />
        <Languages  />
        <Profile />
        <Experience />
        <Academic />
        <About />
        <Skills />
        <Interest />
      </main>
    </AppProvider>
  )
};

export default App;
