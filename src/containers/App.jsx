import React, { useEffect, useState } from 'react';
import '../styles/components/App.styl';
import Header from '../components/Header';
import About from '../components/About';
import Profile from '../components/Profile';
import Experience from '../components/Experience';
import Academic from '../components/Academic';
import Skills from '../components/Skills';
import Interest from '../components/Interest';
import Languages from '../components/Languages';
import  getData from '../utils/getData.js';


const App = () => {
  const [data, setData] = useState({});
  document.addEventListener("DOMContentLoaded", async () => {
    try {
      setData(await getData());
    } catch (error) {
      console.log(error);
    }
  })

// useEffect(() => {
//   getData()
// .then(data => setData(data));
// }, []);
  return (
    <>
      <Header name={data.name} email={data.email} avatar={data.avatar} address={data.address} phone={data.phone} website={data.website}/>
      <Profile profile={data.Profile} profession={data.profession} />
      <Experience xp={data.experience} />
      <Academic academic={data.Academic} />
      <Skills skills={data.skills} />
      <Interest interests={data.interest}/>
      <Languages languages={data.languages}/>
    </>
  )
};

export default App;
