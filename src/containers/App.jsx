import React, {useEffect, useState} from 'react';
import '../styles/components/App.styl';
import  Header from '../components/Header';
import  About  from '../components/About';
import Profile from '../components/Profile';
import Experience from '../components/Experience';
import Academic from '../components/Academic';
import Skills  from '../components/Skills';
import Interest from '../components/Interest';
import Languages  from '../components/Languages';
import getData from '../utils/getData'

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
    social
  } = user;


  return (
    <>
    <Header 
      name={name} 
      profession={profession}
      cellphone={phone}
      email={email}
      website={website}
      address={address}
      >
      <About 
        social={social} />    
    </Header>
    <Profile profile={profile} />
    <Experience experience={experience} />
    <Academic academic={academic} />
    <Skills skills={skills} />
    <Interest interest={interest} />
    <Languages languages={languages} />
        
    </>
  )
};

export default App;
