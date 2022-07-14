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
  const [data, setData] = useState(null);

  useEffect(() => {
    getData('http://localhost:3000/data')
      .then((dataResponse) => {
        setData(dataResponse)
        console.log(dataResponse)
      })
      .catch((err) => {
        throw new Error('Error get data', err)
      })
  }, [])

  return data ? (
    <>
      <Header data={data}>
        <About data={data}/>
      </Header>
      <Profile data={data}/>
      <Experience data={data}/>
      <section className='section'>
        <Academic data={data}/>
        <Skills data={data}/>
      </section>
      <section className='section'>
        <Interest data={data}/>
        <Languages data={data}/>
      </section>
    </>
  ):(
    <h1>Loading...</h1>
  )
};

export default App;
