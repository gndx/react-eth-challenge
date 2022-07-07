import React from 'react';
import Header from '../components/Header';
import About from '../components/About';
import Profile from '../components/Profile';
import Experience from '../components/Experience';
import Academic from '../components/Academic';
import Skills from '../components/Skills';
import Interest from '../components/Interest';
import Languages from '../components/Languages';

import GlobalStyle from '../styles/GlobalStyle';
import { Main, MainContainer } from '../styles/components/containers';

const App = () => {
  return (
    <>
      <GlobalStyle />
      <MainContainer>
        <Header>
          <About />
        </Header>
        <Main>
          <Profile />
          <Experience />
          <Academic />
          <Skills />
          <Interest />
          <Languages />
        </Main>
      </MainContainer>
    </>
  );
};

export default App;
