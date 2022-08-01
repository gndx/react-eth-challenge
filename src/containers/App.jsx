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
import useGetData from '../hooks/useGetData';

const API = 'https://raw.githubusercontent.com/AM27TH/react-eth-challenge/main/data.json';

const App = function () {
  const data = useGetData(API);

  return (
    <>
      <Header data={data}>
        <About data={data} />
      </Header>
      <Profile data={data} />
      <Experience experience={data?.experience} />
      <Academic academic={data?.Academic} />
      <Skills skills={data?.skills} />
      <Interest interest={data?.interest} />
      <Languages languages={data?.languages} />
    </>
  );
};

export default App;
