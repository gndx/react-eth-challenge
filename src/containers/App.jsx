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

function App() {
  const [dataToUse, setDataToUse] = useState(null);
  useEffect(() => {
    getDataToUse();
  }, []);

  const getDataToUse = async () => {
    const { data } = await getData(
      'http://localhost:3000/data',
    );
    setDataToUse(data);
  };

  return (
    <div>
      <Header>
        <About />
      </Header>
      <Profile />
      <Experience />
      <Academic />
      <Skills />
      <Interest />
      <Languages />
    </div>
  );
}

export default App;
