import React from 'react';
import Header from '../components/Header';
import About from '../components/About';
import Profile from '../components/Profile';
import Experience from '../components/Experience';
import Academic from '../components/Academic';
import Skills from '../components/Skills';
import Interest from '../components/Interest';
import Languages from '../components/Languages';
import { getData } from '../utils/getData';
import styled from 'styled-components';

const App = () => {
  const name = getData('name');
  const profession = getData('profession');
  const address = getData('address');
  const email = getData('email');
  const phone = getData('phone');
  const avatar = getData('avatar');
  const website = getData('website');
  const profile = getData('Profile');
  const certificate = getData('certificate');
  const academic = getData('Academic');
  const experience = getData('experience');
  const skills = getData('skills');
  const interest = getData('interest');
  const languages = getData('languages');
  const social = getData('social');


  return (
    <>
      <Header name={name} profession={profession} avatar={avatar} social={social}>
        <About address={address} email={email} phone={phone} website={website} />
      </Header>
      <Profile profile={profile} />
      <Experience experience={experience} />
      <Grid>
        <Academic certificate={certificate} academic={academic} />
        <Skills skills={skills} />
        <Interest interest={interest} />
        <Languages languages={languages} />
      </Grid>
    </>
  )
};

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
`;

export default App;
