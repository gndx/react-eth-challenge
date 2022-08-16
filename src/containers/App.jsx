import React from 'react';
import '../styles/components/App.styl';
import {Header} from '../components/Header';
import {About} from '../components/About';
import {Profile} from '../components/Profile';
import {Experience} from '../components/Experience';
import {Academic} from '../components/Academic';
import {Skills} from '../components/Skills';
import {Interest} from '../components/Interest';
import {Languages} from '../components/Languages';
import { Grid } from '@mui/material';

const App = () => {
  return (
    <div>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Header/>
        </Grid>
        <Grid item xs={12}>
          <About />
        </Grid>
        <Grid item xs={12}>
          <Profile />
        </Grid>
        <Grid item xs={12}>
          <Experience />
        </Grid>
        <Grid item xs={6}>
          <Academic />
        </Grid>
        <Grid item xs={6}>
          <Skills />
        </Grid>
        <Grid item xs={6}>
          <Interest />
        </Grid>
        <Grid item xs={6}>
          <Languages />
        </Grid>
      </Grid>
    </div>
  )
};

export default App;
