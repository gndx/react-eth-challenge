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

  const [state, setState] = useState(null);

  useEffect(() => {
    getUserData();
  }, []);

  const getUserData = async () => {
    const { data } = await getData(
      'https://mocki.io/v1/49062c86-41ac-4c7b-8de0-bac1b3122b8d'
    );

    setState(data);
  };

  if (!state) return null;

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
  } = state;

  return (
    <>
      <Header name={name} avatar={avatar}>
        <About email={email}  address={address}  website={website} phone={phone} job={profession}/>
      </Header>
      <Profile p={profile} />
      <Experience experience={experience}/>
      <div className='div1'>
        <Academic academic={academic}/>
        <Skills skills ={skills} />
      </div>
      <div className='div2'>
        <Interest interest={interest}/>
        <Languages languages={languages} />
      </div>

    </>
  )
};

export default App;
