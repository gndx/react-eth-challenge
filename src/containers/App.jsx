import React from 'react';
import Header from '../components/Header';
import Profile from '../components/Profile';
import About from '../components/About';
import Experience from '../components/Experience';
import Academic from '../components/Academic';
import Skills from '../components/Skills';
import Interest from '../components/Interest';
import Languages from '../components/Languages';
import NavBar from '../components/NavBar';
import Projects from '../components/Projects';

import jsonData from '../../data.json';
let data = jsonData.data;

const App = () => {
  return (
    <div className="bg-gradient flex flex-col items-center pb-8">
      <NavBar data={data} />
      <Header data={data} />
      <Profile data={data} />
      <Skills data={data} />
      <Experience data={data} />
      <Academic data={data} />
      <Projects data={data} />
      <Interest data={data} />
      <About data={data} />
      <Languages data={data} />
    </div>
  );
};

export default App;
