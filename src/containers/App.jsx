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

  const [dataUser, setdataUser] = useState([]);

  useEffect(() => {
    getData('http://localhost:3000/data').then((resp) => {
      console.log(resp);
      setdataUser(resp);
    });
  }, []);

  return (
    <div className='container'>
      <Header
        avatar={dataUser.avatar}
        title={dataUser.name}
        jobtitle={dataUser.profession}
        address={dataUser.address}
      >
        <About
          phone={dataUser.phone}
          website={dataUser.website}
          email={dataUser.email}
          social={dataUser.social}
        />
      </Header>
      <Profile profile={dataUser.Profile} />
      <Experience experience={dataUser.experience} />
      <Academic academic={dataUser.Academic} />
      <Skills skill={dataUser.skills} />
      <Interest interest={dataUser.interest} />
      <Languages language={dataUser.languages} />
    </div>
  );
};

export default App;
