import React from 'react';
import '../styles/components/App.styl';
import { Header } from '../components/Header';
import { About } from '../components/About';
import { Profile } from '../components/Profile';
import { Experience } from '../components/Experience';
import { Academic } from '../components/Academic';
import { Skills } from '../components/Skills';
import { Interest } from '../components/Interest';
import { Languages } from '../components/Languages';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: cener;
  align-items: center;
  width: 100%;
  height: 100%;
  margin: 0;
  font-size: 1.6rem;
`
const App = () => {
  return (
    <Wrapper>
      <Header>
        <About />
      </Header>
      <Profile />
      <Experience />
      <Academic />
      <Skills />
      <Interest />
      <Languages />
    </Wrapper>
  )
};

export default App;
