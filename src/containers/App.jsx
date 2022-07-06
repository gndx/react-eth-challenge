import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import About from '../components/About';
import Profile from '../components/Profile';
import Experience from '../components/Experience';
import Academic from '../components/Academic';
import Skills from '../components/Skills';
import Interest from '../components/Interest';
import Languages from '../components/Languages';
import getData from '../utils/getData';
import { AppProvider } from '../AppContext';

const App = () => {

  return (
    <AppProvider>
      <div className="container mx-auto max-w-screen-xl">
        <div className='flex flex-col sm:flex-row-reverse sm:m-12 shadow-2xl'>
          <div>
            <Header>
              <About />
              <Skills />
              <Languages />
            </Header>
          </div>
          <div className='content w-full p-12'>
            <Profile />
            <hr className="mt-8 mb-12" />
            <Experience />
            <hr className="mt-8 mb-12" />
            <Academic />
            <hr className="mt-8 mb-12" />
            <Interest />          
          </div>
        </div>
      </div>
    </AppProvider>
  )
};

export default App;
