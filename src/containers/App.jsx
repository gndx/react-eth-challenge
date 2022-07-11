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
import { useInfo } from '../utils/useInfo';
const App = () => {
  const {
    interest,
    academic,
    languages,
    skills,
    experience,
    profile,
    website,
    phone,
    profession,
  } = useInfo('http://localhost:3000/data');
  console.log(profile);
  return (
    <>
      <Header>
        <About data={[website, phone, profession]} />
      </Header>
      <Profile data={profile} />
      <Experience data={experience} />
      <Academic data={academic} />
      <Skills data={skills} />
      <Interest data={interest} />
      <Languages data={languages} />
    </>
  );
};

export default App;
