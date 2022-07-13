import React, { useEffect, useState } from 'react';
import Container from './styles';
import Header from '../components/Header';
import About from '../components/About';
import Profile from '../components/Profile';
import Experience from '../components/Experience';
import Academic from '../components/Academic';
import Skills from '../components/Skills';
import Interest from '../components/Interest';
import Languages from '../components/Languages';

import Context from '../Context'
import getData from '../utils/getData';

const App = () => {
  const [userInfo, setUserInfo] = useState({})

  useEffect(() => { 
    getData('http://localhost:3000/data')
    .then((data) => setUserInfo(data))
  }, [])

  return (
    <Context.Provider value={userInfo}>
    <Container>
      <Header>
        <About />
      </Header>
      <Profile />
      <Experience />
      <Academic />
      <Skills />
      <Interest />
      <Languages />
    </Container>
    </Context.Provider>
  )
};

export default App;
