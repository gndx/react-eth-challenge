import React from 'react';
import '../styles/components/App.styl';
import Header from '../components/Header';
import About from '../components/About';
import Profile from '../components/Profile';
import Experience from '../components/Experience';
import Academic from '../components/Academic';
import Skills from '../components/Skills';
import Interest from '../components/Interest';
import Languages from '../components/Languages';
import Loading from '../components/Loading';
import { useEffect, useState } from 'react';
import getData from '../utils/getData';

const App = () => {

  const [data, setData] = useState();
  
  useEffect(() => {
    let url = 'https://raw.githubusercontent.com/andiazo/react-eth-challenge/main/data.json'
    getData(url)
      .then((data) => {setData(data.data)})
  }, [])
1
  return data ? (
    <>
      <Header title={data.name}>
        <About />
      </Header>
      <Profile />
      <Experience />
      <Academic />
      <Skills />
      <Interest />
      <Languages />
    </>
  ) : (
    <Loading />
  )
};

export default App;
