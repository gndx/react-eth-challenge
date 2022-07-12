import React, { useEffect, useState } from 'react';
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

  const [data, setData] = useState();

  useEffect(() => {

      getData('https://raw.githubusercontent.com/MatBarrios/react-eth-challenge/main/data.json')
      .then((data) => {
          setData(data.data); console.log(data)
      })
      .catch((err) => {
          console.log(err);
      });
  }, []);

  return data ? (
    <>
      <Header title={data.name} avatar={data.avatar} role={data.profession}>
        <About data={data} />
      </Header>
      <Profile data={data} />
      <Experience data={data} />

      <div className='cont'>
        <Academic data={data} />
        <Skills data={data} />
      </div>

      <div className='cont'>
        <Interest data={data} />
        <Languages data={data} />
      </div>
    </>
  ) : (
  <div>Loading...</div>
    )
  };


export default App;
