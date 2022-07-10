import React, { useEffect } from 'react';
import '../styles/components/App.styl';
import Header from '../components/Header';
import About from '../components/About';
import Profile from '../components/Profile';
import Experience from '../components/Experience';
import Academic from '../components/Academic';
import Skills from '../components/Skills';
import Interest from '../components/Interest';
import Languages from '../components/Languages';
import getData from '../utils/getData';

const App = () => {
  useEffect(async () => {
    const data = await getData();
  }, []);
  return (
    <div className="container">
      <Header>
        <About />
      </Header>
      <Profile />
      <Experience />
      <div className="row">
        <Academic />
        <Skills />
      </div>
      <div className="row">
        <Interest />
        <Languages />
      </div>
    </div>
  );
};

export default App;
