import React from 'react';
import '../styles/components/App.css';
import { Header } from '../components/Header';
import { About } from '../components/About';
import { Profile } from '../components/Profile';
import { Experience } from '../components/Experience';
import { Academic } from '../components/Academic';
import { Skills } from '../components/Skills';
import { Interest } from '../components/Interest';
import styled from 'styled-components';

const GridLayout = styled.div`
  display: flex;
  flex-wrap: wrap;
  //grid-template-columns: repeat(3, 1fr);
  justify-content: center;
  align-items: center;
  text-align: justify;
  font-size: 2.1rem;
  width: 800px;
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
    </GridLayout>
  )
};

export default App;
