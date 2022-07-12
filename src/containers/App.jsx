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

import json from '../../data.json'

const App = () => {

  const {
    avatar,
    profile,
    experience,
    interest,
    languages,
    academic,
    skills,
    ...about
  } = json.data

  return (
    <>
      <Header avatar={avatar}>
        <About {...about}/>
      </Header>
      <Profile profile={profile}/>
      <Experience items={experience}/>
      <Academic items={academic}/>
      <Skills items={skills}/>
      <Interest items={interest}/>
      <Languages items={languages}/>
    </>
  )
};

export default App;
