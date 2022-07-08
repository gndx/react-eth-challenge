import React from 'react';
import Header from '../components/Header';
import About from '../components/About';
import Profile from '../components/Profile';
import Experience from '../components/Experience';
import Academic from '../components/Academic';
import Skills from '../components/Skills';
import Interest from '../components/Interest';
import Languages from '../components/Languages';

import 'normalize.css';
import '../styles/style.styl';

const App = () => {
  return (
    <div className="App">
      <Header>
        <About />
      </Header>
      <main className="App-main">
        <Profile />
        <Experience />
        <Academic />
        <Skills />
        <Interest />
        <Languages />
      </main>
    </div>
  );
};

export default App;
