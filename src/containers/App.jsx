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
import '../styles/components/App.css';
import Layout from '../components/Layout';

function App() {
  const [profile, setProfile] = useState({});
  useEffect(() => {
    getData('https://react-eth-challenge.free.beeceptor.com/profile')
      .then(
        (response) => {
          const { data } = response;
          setProfile(data);
        },
      );
  }, []);
  return (
    <>
      <Header avatar={profile?.avatar} name={profile?.name}>
        <About
          profession={profile?.profession}
          address={profile?.address}
          email={profile?.email}
          phone={profile?.phone}
          website={profile?.website}
        />
      </Header>
      <Profile profile={profile?.Profile} />
      <Experience experience={profile?.experience} />
      <Layout>
        <Academic academic={profile?.Academic} />
        <Skills skills={profile?.skills} />
      </Layout>
      <Layout>
        <Interest interest={profile?.interest} />
        <Languages languages={profile?.languages} />
      </Layout>
    </>
  );
}

export default App;
