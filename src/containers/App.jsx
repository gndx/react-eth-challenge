import React, { useEffect, useState } from 'react';
import { Header } from '../components/Header';
import { About } from '../components/About';
import { Profile } from '../components/Profile';
import { Experience } from '../components/Experience';
import {Academic} from '../components/Academic';
import { Skills } from '../components/Skills';
import {Interest} from '../components/Interest';
import { Languages } from '../components/Languages';


const App = () => {

  const [apiData, setApiData] = useState([])

  const getApiData = async () => 
  {
    const data = await (await fetch('http://localhost:3000/data')).json()
    console.log(data)
    setApiData(data)
  }

  useEffect(() => { getApiData() }, [])


  return (
    <>
      <Header>
        <About />
      </Header>
      <Profile data={apiData.Profile}/>
      <Experience data={apiData.experience}/>
      <section>
        <Academic data={apiData.Academic}/>
        <Skills data={apiData.skills}/>
        <Interest />
        <Languages />
      </section>
    </>
  )
};

export default App;
