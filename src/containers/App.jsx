import React, { useEffect, useState } from 'react';
import { Fragment } from 'react';
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

  const url = 'https://joelesdar.github.io/JSON-API-React-Challenge/data.json';
  const [data, setData] = useState({});
  const fetchData = async () => {
    const dataJSON = await getData(url);
    setData(dataJSON);
    console.log("Aqui empieza: ");
    console.log(dataJSON);
  };

  useEffect(() => {
    fetchData();
  }, []);


  return (
    <Fragment>
      <Header data={data}/>
      <About data={data}/>
      <Profile data={data}/>
      <Experience data={data}/>
      <Academic data={data}/>
      <Skills data={data}/>
      <Interest data={data}/>
      <Languages data={data}/>
    </Fragment>
  )
};

export default App;
