import React, { useEffect, useState } from 'react';
import { Header } from '../components/Header';
import { About } from '../components/About';
import { Profile } from '../components/Profile';
import { Experience } from '../components/Experience';
import {Academic} from '../components/Academic';
import { Skills } from '../components/Skills';
import {Interest} from '../components/Interest';
import { Languages } from '../components/Languages';
import {getData} from '../utils/getData'


const App = () => {

  const [apiData, setApiData] = useState([])

  useEffect(() => 
  { 
    getData()
    .then(data => setApiData(data)) 
    
  }, [])


  return (
    <>
      <Header>
        <About data={apiData}/>
      </Header>
      <Profile data={apiData.Profile}/>
      <Experience data={apiData.experience}/>
      <section>
        <Academic data={apiData.Academic}/>
        <Skills data={apiData.skills}/>
        <Interest data={apiData.interest}/>
        <Languages data={apiData.languages}/>
      </section>
    </>
  )
};

export default App;
