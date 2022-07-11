import React, { useState, useEffect } from 'react';
import '../styles/components/App.css';
import Header from '../components/Header';
import About from '../components/About';
import Profile from '../components/Profile';
import Experience from '../components/Experience';
import Academic from '../components/Academic';
import Skills from '../components/Skills';
import Interest from '../components/Interest';
import Languages from '../components/Languages';
import getData from '../utils/getData';

const App = () => {
  const [cvData, setCvData] = useState({});

  useEffect(() => {
    getData('https://mocki.io/v1/e4500c30-19be-4595-b165-f160532c25cb')
      .then(data => setCvData(data.data))
      .catch(error => console.log(error));
  }, [])

  console.log(cvData)

  return (
    <div className='container'>
      <div className='row'>
        <Header
          data={cvData}>
        </Header>
      </div>
      <div className='row'>
        <Profile description={cvData.Profile} />
      </div>
      <div className='row'>
        <Experience experience={cvData.experience} />
      </div>
      <div className='row container-columns'>
        <Academic academic={cvData.Academic} />
        <Skills skills={cvData.skills} />
      </div>
      <div className='row container-columns'>
        <Interest interests={cvData.interest} />
        <Languages languages={cvData.languages} />
      </div>
    </div>
  )
};

export default App;