import React from 'react';
import '../styles/App.css';
import { ViteProvider } from '../context/ViteContext';
import Header from '../components/Header';
import About from '../components/About';
import Profile from '../components/Profile';
/* import Experience from '../components/Experience';
import Academic from '../components/Academic';
import Skills from '../components/Skills';
import Interest from '../components/Interest';
import Languages from '../components/Languages'; */

const App = () => {
  return (
    <ViteProvider>
      <Header>
        <About />
      </Header>
      <Profile />
    </ViteProvider>
  );
};

export default App;
