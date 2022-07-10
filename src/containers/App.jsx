import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import About from '../components/About';
import Profile from '../components/Profile';
import Experience from '../components/Experience';
import Academic from '../components/Academic';
import Skills from '../components/Skills';
import Interest from '../components/Interest';
import Languages from '../components/Languages';

import '../styles/components/App.css';
import getData from '../utils/getData';

function App() {
  const [myInfo, setMyInfo] = useState(null);

  const getCvInfo = async () => {
    const mockUrl = '/api';

    try {
      const cvInfo = await getData(mockUrl);
      setMyInfo(cvInfo);
    } catch (error) {
      console.error('Error on cv info service');
      setMyInfo(undefined);
    }
  };

  useEffect(() => {
    getCvInfo();
  }, []);

  if (typeof myInfo === 'undefined') {
    return <h1>Error al obtener la información</h1>;
  }

  if (myInfo === null) {
    return <h1>Cargando...</h1>;
  }

  return (
    <>
      <Header name={myInfo.name} avatar={myInfo.avatar}>
        <About
          profession={myInfo.profession}
          email={myInfo.email}
          website={myInfo.website}
          address={myInfo.address}
        />
      </Header>
      <Profile profile={myInfo.profile} />
      <Experience experience={myInfo.experience} />

      <div className='aditional-info-container'>
        <Academic academic={myInfo.academic} />
        <Skills skills={myInfo.skills} />
        <Interest interest={myInfo.interest} />
        <Languages languages={myInfo.languages} />
      </div>
    </>
  );
}

export default App;
