import React from 'react';
import '../styles/components/App.css';
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
    <div className='container my-4'>
      <div className='row mb-3'>
        <Header>
          <About />
        </Header>
      </div>
      <div className='row mb-3'>
        <Profile />
      </div>
      <div className='row mb-3'>
        <Experience />
      </div>
      <div className='row mb-3 container-columns'>
        <Academic />
        <Skills />
      </div>
      <div className='row mb-3 container-columns'>
        <Interest />
        <Languages />
      </div>
    </div>
  )
};

export default App;
