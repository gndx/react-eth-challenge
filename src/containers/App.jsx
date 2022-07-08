import React from 'react';
import '../styles/components/App.styl';
import Header from '../components/Header';
import Profile from '../components/Profile';
import Experience from '../components/Experience';
import About from '../components/About';
import Academic from '../components/Academic';
import Skills from '../components/Skills';
import Interest from '../components/Interest';
import Languages from '../components/Languages';

function App() {
  return (
    <>
      <Header />
      <Profile />
      <Experience />
      <About />
      <div className='container'>
        <Academic />
        <Skills />
      </div>
      <div className='container'>
        <Interest />
        <Languages />
      </div>
    </>
  );
};

export default App;
