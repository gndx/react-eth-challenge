import React, { useEffect, useState, createContext } from 'react';
import '../styles/App.styl';
import {
  Header,
  About,
  Experience,
  Academic,
  Skills,
  Interest,
  Languages,
  Profile,
  Certificate
} from '../components/index.js';
import Social from '../components/Social.jsx';
import { Grid } from '@mui/material';
import { Sheet } from '../styles/GlobalStyle';

import getData from '../utils/getData';

export const Context = createContext({});

const App = () => {
  const [resumeData, setResumeData] = useState({});
  const API = 'https://mocki.io/v1/a73ee70e-b5fa-4828-8f84-b7ba19e80470';

  useEffect(() => {
    getData(API)
      .then((data) => setResumeData(data.data))
      .catch((error) => console.log(error));
  }, []);

  return (
     <Sheet>
      <div>
        <Context.Provider value={resumeData}>
          <Grid className='container' container spacing={2}>
            <Grid className='header' item xs={12}>
              <Header>
                <About />
              </Header>
            </Grid>
            <Grid className='profile' item xs={12}>
              <Profile />
            </Grid>
            <Grid className='experience' item xs={12}>
              <Experience />
            </Grid>
            <Grid className='academic' item xs={6}>
              <Academic />
            </Grid>
            <Grid className='academic' item xs={6}>
              <Certificate />
            </Grid>
            <Grid className='skills' item xs={6}>
              <Skills />
            </Grid>
            <Grid className='interest' item xs={6}>
              <Interest />
            </Grid>
            <Grid className='languages'item xs={6}>
              <Languages />
            </Grid>
            <Grid className='social'item xs={6}>
              <Social />
            </Grid>
          </Grid>
        </Context.Provider>
      </div>
    </Sheet>
  );
};

export default App;
