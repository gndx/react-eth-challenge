import React, {useState, useEffect} from 'react';
import '../styles/components/App.styl';
import Header from '../components/Header';
import About from '../components/About';
import Profile from '../components/Profile';
import Experience from '../components/Experience';
import Academic from '../components/Academic';
import Skills from '../components/Skills';
import Interest from '../components/Interest';
import Languages from '../components/Languages';
import AppContext from '../context/AppContext';
import useUser from '../hoc/useUser';

const App = () => {
  const [user, loading] = useUser();

  if(loading) return <h1>Loading...</h1>

  return (
    <AppContext.Provider value={user}>
      <Header>
        <About />
      </Header>
      <Profile />
      <Experience />
      <div className="container_row">
        <Academic/>
        <Skills/>
      </div>
      <div className="container_row">
        <Interest />
        <Languages />
      </div>
     
    </AppContext.Provider>
  )
};

export default App;
