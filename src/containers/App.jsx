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
    getData('http://127.0.0.1:3000/data')
      .then(data => setCvData(data))
      .catch(error => console.log(error));
  }, [])

  console.log(cvData)

  return (
    <div className='container my-4'>
      <div className='row mb-3'>
        <Header
          data={cvData}>
        </Header>
      </div>
      <div className='row mb-3'>
        <Profile description={cvData.Profile} />
      </div>
      <div className='row mb-3'>
        <Experience experience={cvData.experience} />
      </div>
      <div className='row mb-3 container-columns'>
        <Academic academic={cvData.Academic} />
        <Skills skills={cvData.skills} />
      </div>
      <div className='row mb-3 container-columns'>
        <Interest interests={cvData.interest} />
        <Languages languages={cvData.languages} />
      </div>
    </div>
  )
};

export default App;