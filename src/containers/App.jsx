import React, { useState, useEffect } from 'react';
import '../styles/components/App.styl';
import { Header } from '../components/Header';
import { About } from '../components/About';
import { Profile } from '../components/Profile';
import { Experience } from '../components/Experience';
import { Certificate } from '../components/Certificate';
import { Academic } from '../components/Academic';
import { Skills } from '../components/Skills';
import { Interest } from '../components/Interest';
import { Languages } from '../components/Languages';
import getData from '../utils/getData';

const url = 'http://localhost:3000/data'

const getUserData = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    getData(url)
      .then(response => setData(response));
  }, []);
  return data;
}

export const App = () => {
  const data = getUserData();

  const {
    name,
    profession,
    phone,
    email,
    website,
    address,
    avatar,
    Profile: profile,
    certificate: certificates,
    Academic: academic,
    experience: experiences,
    skills,
    interest: interests,
    languages,
    social,
  } = data;

  return (
    <React.Fragment>
      <Header name={name} avatar={avatar} profession={profession} phone={phone} email={email} website={website} address={address} >
        <About social={social} />
      </Header>
      <Profile profile={profile} />
      <Experience experiences={experiences} />
      <Academic academic={academic} />
      <Certificate certificates={certificates} />
      <Skills skills={skills} />
      <Interest interests={interests} />
      <Languages languages={languages} />
    </React.Fragment>
  )
};
