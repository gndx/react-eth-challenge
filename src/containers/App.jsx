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
import Context from '../Context/context';

const App = () => {
  const URL = 'http://localhost:3000/data';
  const [data, setData] = useState(null);

  const getProfileData = async () => {
    const response = await getData(URL);
    setData(response);
  };

  useEffect(() => {
    getProfileData();
  }, []);

  return (
    <Context.Provider value={data}>
      <Header>
        <About />
      </Header>
      <Profile />
      <Experience />

      <div className="container">
        <Academic />
        <Skills />
      </div>
      <div className="container">
        <Interest />
        <Languages />
      </div>
    </Context.Provider>
  );
};

export default App;
