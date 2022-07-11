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
  const [worker, setWorker] = useState(null);

  useEffect(() => {
    getWorkerData();
  }, []);

  const getWorkerData = async () => {
    const data = await getData('https://react-eth-uchihacfc.free.beeceptor.com/worker/1');
    setWorker(data.data);
  };

  if (!worker) return null;

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
  } = worker;

  return (
    <>
      <Header avatar={avatar} name={name}>
        <About
          profession={profession}
          address={address}
          email={email}
          phone={phone}
          website={website} />
      </Header>
      <div className="c-Profile">
        <Profile profile={profile} />
      </div>
      <div className="c-Experience">
        <Experience experience={experience} />
      </div>
      <div className="c-Extras">
        <Academic academic={academic} />
        <Skills skills={skills} />
        <Languages languages={ languages } />
        <Interest interest={interest} />
      </div>
    </>
  )
};

export default App;
