import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

import About from '../components/About';
import Academic from '../components/Academic';
import Certificates from '../components/Certificates';
import Experience from '../components/Experience';
import Header from '../components/Header';
import Interest from '../components/Interest';
import Languages from '../components/Languages';
import Profile from '../components/Profile';
import Skills from '../components/Skills';

import useGetProducts from '../hooks/useGetData';

import '../styles/components/App.styl';

const API = 'https://run.mocky.io/v3/046bc40d-0bc3-4145-b974-fa5a308cb4bb';

const App = () => {
  const data = useGetProducts(API);

  return (
    <Box
      sx={{
        p: 2,
        margin: 'auto',
        maxWidth: 800,
        flexGrow: 1,
      }}
    >
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
        spacing={3}
      >
        {/* <div className="Main-content"> */}
        <Grid item xs={12} sx={{ p: 4, border: '1px dashed grey' }}>
          <Header
            name={data?.name}
            profession={data?.profession}
            avatar={data?.avatar}
          >
            <About
              items={data?.social}
              phone={data?.phone}
              email={data?.email}
              website={data?.website}
              adress={data?.address}
            />
          </Header>
        </Grid>
        <Grid item xs={12} sx={{ p: 2, border: '1px dashed grey' }}>
          <Profile desc={data?.profile} />
        </Grid>
        <Grid item xs={12} sx={{ p: 2, border: '1px dashed grey' }}>
          <Experience items={data?.experience} />
        </Grid>
        <Grid item xs={8} sx={{ p: 2, border: '1px dashed grey' }}>
          <Academic items={data?.academic} />
        </Grid>
        <Grid item xs={4} sx={{ p: 8.4, border: '1px dashed grey' }}>
          <Skills items={data?.skills} />
        </Grid>
        <Grid item xs={12} sx={{ p: 2, border: '1px dashed grey' }}>
          <Certificates items={data?.certificate} />
        </Grid>
        <Grid item xs={8} sx={{ p: 8, border: '1px dashed grey' }}>
          <Interest items={data?.interest} />
        </Grid>
        <Grid item xs={4} sx={{ p: 2.4, border: '1px dashed grey' }}>
          <Languages items={data?.languages} />
        </Grid>
        {/* </div> */}
      </Grid>
    </Box>
  );
};

export default App;
