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

const GridLayout = styled.div`
  display: grid
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(4, 1fr);
  justify-content: cener;
  align-items: center;
  text-align: justify;
  width: 800px;
  margin-left: 30rem;
  font-size: 2.1rem;
`
const App = () => {
  return (
    <GridLayout>
      <Header>
        <About />
      </Header>
      <Profile />
      <Experience />
      <Academic />
      <Skills />
      <Interest />
      <Languages />
    </GridLayout>
  )
};

export default App;
