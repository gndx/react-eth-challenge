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

const App = () => {
  return (
    <div className="App">
      <div className="App-container">
        <Header>
          <About />
        </Header>
        <Profile />
        <Experience />
        <div className="App-grid">
          <Academic />
          <Skills />
        </div>
        <div className="App-grid">
          <Interest />
          <Languages />
        </div>
      </div>
      <div className="App-round App-top-left" />
      <div className="App-round App-bottom-right" />
    </div>
  );
};

export default App;
