import React from 'react';
import Header from '../components/Header/Header';
import About from '../components/About/About';
import Profile from '../components/Profile/Profile';
import Experience from '../components/Experience/Experience';
import Academic from '../components/Academic/Academic';
import Skills from '../components/Skills/Skills';
import Interest from '../components/Interest/Interest';
import Languages from '../components/Languages/Languages';
import { GlobalStyles } from '../styles/GlobalStyles';
import Div from './styles';
import Background from '../components/Background/Background';

function App() {
  return (
    <>
      <GlobalStyles />
      <Background />
      <Header>
        <About />
      </Header>
      <Profile />
      <Experience />
      <Div>
        <Academic />
        <Skills />
      </Div>
      <Div>
        <Interest />
        <Languages />
      </Div>
    </>
  );
}

export default App;
