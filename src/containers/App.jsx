import React, { useEffect, useState } from 'react';
import '../styles/components/App.styl';
import getData from '../utils/getData'
import Header from '../components/Header';
import About from '../components/About';
import Profile from '../components/Profile';
import Experience from '../components/Experience';
import Academic from '../components/Academic';
import Skills from '../components/Skills';
import Interest from '../components/Interest';
import Languages from '../components/Languages';
import {  UserProvider } from '../context/context';

const ApiURL = 'http://localhost:3000/data';

const App = () => {

  // const [data, setData] = useState(null)

  // console.log(data);
  // useEffect(() => {
  //   getData(ApiURL).then(setData)
  // }, [])


  return (
    <UserProvider>
      <Header>
        <About />
      </Header>
      <Profile />
      <div className="information-blocks">
        <div className="two-blocks">
          <Experience />
          <Academic />
        </div>
        <div className="three-blocks">
          <Skills />
          <Interest />
          <Languages />
        </div>
      </div>
    </UserProvider>
  )
  // : <div>Loading...</div>
};

export default App;
