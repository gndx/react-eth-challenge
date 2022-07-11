import React, { useState, useEffect } from 'react';
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
  const [user, setUser] = useState(null);

  useEffect(() => {
    getUserData();
  }, []);

  const getUserData = async () => {
    const data = await getData('https://raw.githubusercontent.com/macailh/react-eth-challenge/main/data.json');
    setUser(data);
  };

  if (!user) return null;

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
  } = user;
//I know, thats wrong
  return (
    <>
    <Header>
      <About
        avatar={user.data.avatar}
        name={user.data.name}
        address={user.data.address}
        email={user.data.email}
        phone={user.data.phone}
        profession={user.data.profession}
        website={user.data.website} />
    </Header>
    <Profile profile={user.data.Profile}/>
    <Experience experience={user.data.experience}/>
    <Academic academic={user.data.Academic}/>
    <Skills skills={user.data.skills}/>
    <Interest interest={user.data.interest}/>
    <Languages languages={user.data.languages}/>
  </>
  )
};

export default App;
