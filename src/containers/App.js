import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import About from '../components/About';
import Profile from '../components/Profile';
import Experience from '../components/Experience';
import Academic from '../components/Academic';
import Skills from '../components/Skills';
import Interest from '../components/Interest';
import Languages from '../components/Languages';

import getData from '../utils/getData';

import dataLocal from '../../data.json';

const App = () => {
  const { data: initialData } = dataLocal;
  const [data, setData] = useState(initialData);

  useEffect(() => {
    getData('http://localhost:3000/data').then(setData);
  }, []);

  const {
    name,
    profession,
    address,
    email,
    website,
    phone,
    avatar,
    Profile: profile,
    certificate,
    Academic: academic,
    experience,
    skills,
    interest,
    languages,
  } = data;

  const propHeader = {
    avatar,
    name,
    profession,
    address,
    email,
    phone,
    website,
  };

  return (
    <div className="App">
      <Header {...propHeader}>
        <About />
      </Header>
      <main className="App-main">
        <Profile profile={profile} />
        <Experience experience={experience} />
        <section className="App-subcontainer">
          {/* <Academic academic={academic} certificate={certificate} /> */}
          <Academic academic={academic} />
          <Skills skills={skills} />
          <Interest interest={interest} />
          <Languages languages={languages} />
        </section>
      </main>
    </div>
  );
};

export default App;
