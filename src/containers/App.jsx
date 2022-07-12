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

import CompleteData from '../../data.json';

function App() {
  const { data } = CompleteData;
  if (data) {
    return (
      <>
        <Header>
          <About />
        </Header>
        <Profile />
        <Experience />
        <Academic data={data.certificate} />
        <Skills data={data.skills} />
        <Interest data={data.interest} />
        <Languages data={data.languages} />
      </>
    );
  }
}

export default App;
