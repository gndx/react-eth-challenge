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
      <Header name={list.name} profileImage={list.avatar}>
        <About 
          email={list.email}
          profession={list.profession}
          address={list.address}
          website={list.website}
          phone={list.phone}
        />
      </Header>
      <Profile data={list.Profile} />
      <Experience data={list.Experience} />
      <Academic data={list.Academic} />
      <Skills data={list.Skills} />
      <Interest data={list.Interest} />
      <Languages data={list.Languages} />
    </>
  )
};

export default App;
