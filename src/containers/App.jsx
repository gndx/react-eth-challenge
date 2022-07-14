/* eslint-disable react/function-component-definition */
/* eslint-disable jsx-quotes */
/* eslint-disable import/no-cycle */
/* eslint-disable react/jsx-no-useless-fragment */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import '../styles/components/App.styl';
import Header from '../components/Header';
import About from '../components/About';
import Academic from '../components/Academic';
import Profile from '../components/Profile';
import Experience from '../components/Experience';
import Skills from '../components/Skills';
import Interest from '../components/Interest';
import Languages from '../components/Languages';
import AppContext from './AppContext';
import useUser from '../hocks/data';

const App = () => {
  const [data, loading] = useUser();

  if (loading) return <h1>Loading...</h1>;

  return (
    <AppContext.Provider value={data}>
      <Header>
        <About />
      </Header>
      <Profile />
      <Experience />
      <div className="academic-area">
        <Academic />
        <Skills />
        <Interest />
        <Languages />
      </div>
    </AppContext.Provider>
  );
};

export default App;
