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
import getData from '../utils/getData';

const App = () => {

  const [content, setContent] = useState(null);

  useEffect(() => {
    getContentData();
  }, []);

  const getContentData = async () => {
    const { data } = await getData(
      'https://api.mocki.io/v2/4492ea75'
    );

    setContent(data);
  };

  if (!content) return null;

  const {
    Academic: academic,
    address,
    avatar,
    email,
    experience,
    interest,
    languages,
    name,
    phone,
    profession,
    Profile: profile,
    skills,
    website,
  } = content;

  return (
    <div className='Main-content'>
      <Header
        name = {name}
        profession = {profession}
        avatar = {avatar}
      >
        <About
          phone = {phone}
          email = {email}
          website = {website}
          address = {address}
        />
      </Header>
      <Profile 
        desc = {profile}
      />
      <Experience
        items = {experience}
      />
      <Academic
        items = {academic}
      />
      <Skills
        items = {skills}
      />
      <Interest
        items = {interest}
      />
      <Languages
        items = {languages}
      />
    </div>
  )
};

export default App;