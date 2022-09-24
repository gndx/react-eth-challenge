import React, { useEffect, useState }  from 'react';
import '../styles/components/App.styl';
import { Header } from '../components/Header';
import { About } from '../components/About';
import { Profile } from '../components/Profile';
import { Experience } from '../components/Experience';
import { Academic } from '../components/Academic';
import { Skills } from '../components/Skills';
import { Interest } from '../components/Interest';
import { Languages } from '../components/Languages';
import getData from '../utils/getData'
const App = () => {
  const [user, setUser] = useState([])
  
  useEffect(() => {
    getUserData();
  },[]);

  const getUserData = async () => {
    const data2 = await getData('https://cv-data-intw8flhv-luisfduarte.vercel.app/')
    setUser(data2);
  };

  
  return (
    <>
      <Header {...user}/>   
      <About {...user}/>
      <Profile {...user}/>
      <Experience {...user} />
      <Academic {...user}/>
      <Skills {...user}/>
      <Interest {...user} />
      <Languages {...user}/>
    </>
  )
};

export default App;
