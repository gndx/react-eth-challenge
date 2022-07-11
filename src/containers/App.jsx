import '../styles/styles.css';
import React, { useState, useEffect, createContext } from 'react';
import Header from '../components/Header';
import About from '../components/About';
import Profile from '../components/Profile';
import Experience from '../components/Experience';
import Academic from '../components/Academic';
import Skills from '../components/Skills';
import Interest from '../components/Interest';
import Languages from '../components/Languages';

import { getData } from '../utils/getData';

const initialValue = {
  skills: [{}, {}, {}],
  Academic: [{}, {}, {}],
  experience: [{}, {}, {}],
};

export const Context = createContext(initialValue);

const App = () => {
  const [data, setData] = useState({});

  useEffect(() => {
    getData('../data.json').then((response) => {
      setData(response.data);
    });
  }, []);

  return (
    <Context.Provider value={data}>
      <div className='w-full h-full bg-[url("../assets/6020105.jpg")] bg-cover bg-center bg-fixed'>
        <div className="px-36 py-10">
          <div className="flex flex-col rounded-xl px-6 py-4 gap-4 glass neon-border">
            <Header>
              <About />
            </Header>
            <span className="m-4 rounded-sm divider" />
            <Profile />
            <span className="m-4 rounded-sm divider" />
            <Experience />
            <span className="m-4 rounded-sm divider" />
            <Academic />
            <span className="m-4 rounded-sm divider" />

            <Skills />
            <span className="m-4 rounded-sm divider" />
            <Interest />
            <span className="m-4 rounded-sm divider" />

            <Languages />
          </div>
        </div>
      </div>
    </Context.Provider>
  );
};

export default App;
