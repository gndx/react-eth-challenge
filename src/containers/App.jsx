import React, {useEffect, useState} from 'react';
import '../styles/components/App.css';
import Header from '../components/Header';
import Profile from '../components/Profile';
import Experience from '../components/Experience';
import Academic from '../components/Academic';
import Skills from '../components/Skills';
import Interest from '../components/Interest';
import Languages from '../components/Languages';

const App = () => {

  return (
    <div className="app">
      <div>
        <Header />
      </div>
      <div>
        <Profile />
      </div>
      <div>
        <Experience />
      </div>
      <div className="acedemic-and-skills">
        <div>
          <Academic />
        </div>
        <div>
          <Skills />
        </div>
      </div>
      <div className="interest-and-languages">
        <Interest />
        <Languages />
      </div>
    </div>
  );
};

export default App;
