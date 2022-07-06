import React from 'react';
import '../styles/App.css';
import { ViteProvider } from '../context/ViteContext';
import Header from '../components/Header';
import About from '../components/About';
import Profile from '../components/Profile';
import Experience from '../components/Experience';
import Academic from '../components/Academic';
import Interest from '../components/Interest';
import Languages from '../components/Languages';
/*
import Skills from '../components/Skills';
*/

const App = () => {
  return (
    <>
      <ViteProvider>
        <Header>
          <About />
        </Header>
        <Profile />
        <Experience />
        <Academic />
        <Interest />
        <Languages />
      </ViteProvider>
    </>
  );
};

export default App;
