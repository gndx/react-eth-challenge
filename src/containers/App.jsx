import React from 'react';
import '../styles/components/App.styl';
import Header from '../components/Header';
import About from '../components/About';
import Profile from '../components/Profile';
import Experience from '../components/Experience';
import Academic from '../components/Academic';
import Skills from '../components/Skills';
import Interest from '../components/Interest';
import Languages from '../components/Languages';

const App = () => {
  return (
    <>
      <Header>
        <About />
      </Header>
      <Profile />
      <Experience />
      <div class="grid-section">
        <Academic />
        <Skills />
      </div>
      <div class="grid-section">
        <Interest />
        <Languages />
      </div>
    </>
  )
};

export default App;
