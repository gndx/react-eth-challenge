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
import AppContext from '../context/AppContext';
import useDataHook from '../hooks/useDataHook';

const App = () => {
  const cvData = useDataHook();
  const render = () => (
    <div>
      <AppContext.Provider value={cvData}>
        <Header>
          <About />
        </Header>
        <Profile />
        <Experience />
        <div className="grid">
          <Academic />
          <Skills />
          <Interest />
          <Languages />
        </div>
      </AppContext.Provider>
    </div> 
  );

  return <>{render()}</>
};

export default App;
