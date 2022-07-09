import React from 'react';
import Header from '../components/Header';
import About from '../components/About';
import Profile from '../components/Profile';
import Experience from '../components/Experience';
import Academic from '../components/Academic';
import Skills from '../components/Skills';
import Interest from '../components/Interest';
import Languages from '../components/Languages';

import '../styles/components/App.css';

function App() {
  return (
    <>
      <Header>
        <About />
      </Header>
      <Profile />
      <Experience />

      <div className='aditional-info-container'>
        <Academic />
        <Skills />
        <Interest />
        <Languages />
      </div>
    </>
  );
}

export default App;
