import React from 'react';
import '../styles/App.styl'
import Header from '../components/Header';
import About from '../components/About';
import Profile from '../components/Profile';
import Experience from '../components/Experience';
import Academic from '../components/Academic';
import Skills from '../components/Skills';
import Interest from '../components/Interest';
import Languages from '../components/Languages';
import getData from '../utils/getData'

function App() {
  const api = '';

  getData(api);
  return (
    <>
      <Header>
        <About />
      </Header>
      <Profile />
      <Experience /> 
      <Academic />
      <Skills />
      <Interest />
      <Languages /> 
    </>
  );
}

export default App;
