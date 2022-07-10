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
import ColumnLayout from './ColumnLayout';
import SocialNetworks from '../components/SocialNetworks';
import getData from '../utils/getData';

function App() {
  const [profile, setProfile] = useState({});
  const API = 'https://my-json-server.typicode.com/cacosted/cv-data/data';

  useEffect(() => {
    getData(API).then((result) => setProfile(result));
  }, []);

  return (
    <>
      <Header
        avatar={profile.avatar}
        name={profile.name}
        profession={profile.profession}
      >
        <About
          email={profile.email}
          address={profile.address}
          phone={profile.phone}
          website={profile.website}
        />
        <SocialNetworks socials={profile.social} />
      </Header>

      <Profile description={profile.Profile} />
      <Experience experiences={profile.experience} />
      <ColumnLayout>
        <Academic academics={profile.Academic} />
        <Skills skills={profile.skills} />
      </ColumnLayout>
      <ColumnLayout>
        <Interest interests={profile.interest} />
        <Languages languages={profile.languages} />
      </ColumnLayout>
    </>
  );
}

export default App;
