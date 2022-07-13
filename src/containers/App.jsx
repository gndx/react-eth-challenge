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
import getData from '../utils/getData';

const App = () => {
  const URL = 'http://localhost:3000/data';
  const [data, setData] = useState(null);

  const getProfileData = async () => {
    const result = await getData(URL);
    setData(result);
  };

  useEffect(() => {
    getProfileData();
  }, []);

  return (
    <>
      <Header {...data} />
      <Profile {...data} />
      <Experience {...data} />
      <div className="container">
        <Academic {...data} />
        <Skills {...data} />
      </div>
      <div className="container">
        <Interest {...data} />
        <Languages {...data} />
      </div>
      <About {...data} />
    </>
  );
};

export default App;
