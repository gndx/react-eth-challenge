import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import About from '../components/About';
import Profile from '../components/Profile';
import Experience from '../components/Experience';
import Academic from '../components/Academic';
import Skills from '../components/Skills';
import Interest from '../components/Interest';
import Languages from '../components/Languages';
import getData from '../utils/getData';

function App() {
  const [data, setData] = useState([]);

  const API = 'https://sergiogval.github.io/jsonapi/data.json';
  const fetchData = async () => {
    const response = await getData(API);
    setData(response);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const {
    Profile: profile,
  } = data;

  return (
    <div>
      <Header data={data} />
      <div className='container'>
        <About data={data} />
        <Profile profile={profile} />
      </div>
      <Experience />
      <div className='container'>
        <Academic />
        <Interest />
      </div>
      <div className='container'>
        <Skills />
        <Languages />
      </div>
    </div>
  );
};

export default App;
