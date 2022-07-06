import React, { useEffect, useState } from 'react';
import '../styles/components/App.styl';
import Header from '../components/Header';
import About from '../components/About';
import Profile from '../components/Profile';
import Experience from '../components/Experience';
import Academic from '../components/Academic';
import Skills from '../components/Skills';
import Interest from '../components/Interest';
import Languages from '../components/Languages';
import getData from '../utils/getData.js'

const App = () => {
  const [list, setList] = useState([]);

  useEffect(() => {
    let displayed = true;
    getData("http://localhost:3000/data").then(cvData => {
      if (displayed) {
        setList(cvData)
      }
    })
    return () => displayed = false;
  }, []);

  console.log(list)
  return (
    <>
      <Header>
        <About />
      </Header>
      <Profile profile={list.profile} />
      <Experience />
      <Academic data={list.Academic} />
      <Skills />
      <Interest />
      <Languages />
    </>
  )
};

export default App;
