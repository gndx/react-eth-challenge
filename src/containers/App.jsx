import React, { useEffect, useState, createContext } from 'react';
import '../styles/components/App.styl';
import Header from '../components/Header';
import About from '../components/About';
import Profile from '../components/Profile';
import Experience from '../components/Experience';
import Academic from '../components/Academic';
import Skills from '../components/Skills';
import Interest from '../components/Interest';
import Languages from '../components/Languages';
import getData from '../utils/getData'

export const Context = createContext({});

const App = () => {
  const [myData, setMyData] = useState({});

  useEffect(() => {
    getData("http://localhost:3000/data")
      .then(rs => setMyData(rs));
  }, [])

  return (
    <Context.Provider value={myData}>
      {JSON.stringify(myData)}
      <Header>
        <About />
      </Header>
      <Profile />
      <Experience />
      <div className="grid-section">
        <Academic />
        <Skills />
      </div>
      <div className="grid-section">
        <Interest />
        <Languages />
      </div>
    </Context.Provider>
  )
};

export default App;
