import React from 'react';
import '../styles/App.css';
import { ViteProvider, useVite } from '../context/ViteContext';
import Header from '../components/Header';
import About from '../components/About';
import { Profile } from '../components/Profile';
import { Experience } from '../components/Experience';
import { Academic } from '../components/Academic';
import { Interest } from '../components/Interest';
import { Languages } from '../components/Languages';
import { Skills } from '../components/Skills';

function VitePage() {
  const { user } = useVite();
  return (
    <main className="vite-grid">
      <Header className="item-0">
        <About />
      </Header>
      <Profile className="item-1" />
      <Experience className="item-2" expList={user?.experience} />
      <Academic className="item-3" academicList={user?.Academic} />
      <Interest className="item-4" interestsList={user?.interest} />
      <Languages className="item-5" languagesList={user?.languages} />
      <Skills className="item-6" />
    </main>
  );
}

function App() {
  return (
    <ViteProvider url="https://raw.githubusercontent.com/wolftrax5/react-eth-challenge/main/data.json">
      <VitePage />
    </ViteProvider>
  );
}

export default App;
