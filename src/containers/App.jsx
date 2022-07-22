import React, { useEffect, useState } from 'react';
import { Body } from './appstyle'; 
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
    const data = await getData('http://localhost:3000/data');
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

  return (
    <Body className="App">
      <div className="App-container">
        <Header avatar={avatar} name={name}>
          <About
            address={address}
            email={email}
            phone={phone}
            profession={profession}
            website={website}
          />
        </Header>
        <Profile profile={profile}></Profile>
        <Experience experience={experience} />
        <div className="App-grid">
          <Academic academic={academic} />
          <Skills skills={skills} />
        </div>
        <div className="App-grid">
          <Interest interest={interest} />
          <Languages languages={languages} />
        </div>
      </div>
      <div className="App-round App-top-left" />
      <div className="App-round App-bottom-right" />
    </Body>
  );
};

export default App;