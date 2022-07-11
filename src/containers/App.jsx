import React from 'react';
import '../styles/components/App.styl';
import Header from '../components/Header/Header';
import About from '../components/About/About';
import Profile from '../components/Profile/Profile';
import Experience from '../components/Experience/Experience';
import Academic from '../components/Academic/Academic';
import Skills from '../components/Skills/Skills';
import Interest from '../components/Interest/Interest';
import Languages from '../components/Languages/Languages';

const App = () => {
  return (
    <React.Fragment>
      <Header>
        <About />
      </Header>
      <Profile />
      <Experience />
      <Academic />
      <Skills />
      <Interest />
      <Languages />
    </React.Fragment>
  )
};

export default App;
