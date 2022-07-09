import React, { useState, useEffect } from 'react';
import '../styles/components/App.styl';
import getData from '../utils/getData';
import Header from '../components/Header';
//import jsonData from 'data.json';
/*import About from '../components/About';
import Profile from '../components/Profile';
import Experience from '../components/Experience';
import Academic from '../components/Academic';
import Skills from '../components/Skills';
import Interest from '../components/Interest';
import Languages from '../components/Languages';*/

/*
const { data } = await getData(
  '../data.json'
);*/




const App = () => {

  const [data, setData] = useState(null);

  const getCVData = async () => {
    const { data }  = await getData('data.json');
    setData(data);
  };

  useEffect(() => {
    getCVData();
  }, []);

  if (!data) return null;
  else {

    return (
      <>
        <Header name={data.name}>
          {/*<About />*/}
        </Header>
        {/*
        <Profile />
        <Experience />
        <Academic />
        <Skills />
        <Interest />
        <Languages />
    */}
      </>
    )
  }
};

export default App;
