import React from 'react';
import Header from '../components/Header';
import About from '../components/About';
import { Profile } from '../components/Profile';
import { Experience } from '../components/Experience';
import { Academic } from '../components/Academic';
import { Interest } from '../components/Interest';
import { Languages } from '../components/Languages';
import { Skills } from '../components/Skills';
import { useVite } from '../context/ViteContext';

export function VitePage() {
  const { user } = useVite();
  return (
    <main className="vite-grid">
      <Header className="item-0">
        <About />
      </Header>
      <Profile className="item-1" userProfile={user?.profile} />
      <Experience className="item-2" expList={user?.experience} />
      <Academic className="item-3" academicList={user?.academic} />
      <Interest className="item-4" interestsList={user?.interest} />
      <Languages className="item-5" languagesList={user?.languages} />
      <Skills className="item-6" skillLilst={user?.skillLilst} />
    </main>
  );
}

export default VitePage;
