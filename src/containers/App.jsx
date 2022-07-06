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
import Skills from '../components/Skills';

const App = () => {
  return (
    <>
      <ViteProvider>
        <main className="vite-grid">
          <Header className="item-0">
            <About />
          </Header>
          <Profile className="item-1" />
          <Experience className="item-2" />
          <Academic className="item-3" />
          <Interest className="item-4" />
          <Languages className="item-5" />
          <Skills className="item-6" />
        </main>
      </ViteProvider>
    </>
  );
};

export default App;
