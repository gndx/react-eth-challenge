import React, { useEffect, useState } from 'react';
import { Header } from '../components/Header';
import { About } from '../components/About';
import { Profile } from '../components/Profile';
import { Experience } from '../components/Experience';
import {Academic} from '../components/Academic';
import { Skills } from '../components/Skills';
import {Interest} from '../components/Interest';
import { Languages } from '../components/Languages';

const [data, setData] = useState([])

useEffect(() => {
  first

  return () => {
    second
  }
}, [])


const App = () => {
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
  )
};

export default App;
