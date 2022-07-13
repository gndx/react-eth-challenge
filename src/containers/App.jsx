import React, { useState, useEffect } from 'react';
import '../styles/components/App.styl';
import Header from '../components/Header';
import Profile from '../components/Profile';
import Experience from '../components/Experience';
import Academic from '../components/Academic';
import Skills from '../components/Skills';
import Interest from '../components/Interest';
import Languages from '../components/Languages';
import getData from '../utils/getData';

function App() {
  const [dataApi, setDataApi] = useState([]);

  useEffect(() => {
    async function getDataApi() {
      const data = await getData();
      setDataApi(data.data);
    }
    getDataApi();
  }, []);
  return (
    <>
      <Header
        avatar={dataApi.avatar}
        name={dataApi.name}
        profession={dataApi.profession}
        phone={dataApi.phone}
        email={dataApi.email}
        website={dataApi.website}
        address={dataApi.address}
      />
      <Profile
        profile={dataApi?.Profile}
      />
      <Experience
        experience={dataApi?.experience}
      />
      <Academic
        academic={dataApi?.Academic}
      />
      <Skills
        skills={dataApi?.skills}
      />
      <Interest
        interest={dataApi?.interest}
      />
      <Languages
        languages={dataApi?.languages}
      />
    </>
  );
}

export default App;
