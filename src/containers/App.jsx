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
import { UserDataProvider } from "../context/UserDataProvider";

const App = () => {

  return (
    <>
      <UserDataProvider>
        < Header  >
          <About />
        </Header >
        <Profile />
        <Experience />
        <div className='Academic-segment'>
          <Academic />
          <Skills />
        </div>
        <div className='Extra-segment'>
          <Interest />
          <Languages />
        </div>
      </UserDataProvider>
    </>
  )
};

export default App;
