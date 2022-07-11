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
  const [list, setList] = useState([]);
  const apiUrl = 'http://localhost:3000/data';

  useEffect(() => {
    let displayed = true;
    getData(apiUrl).then((cvData) => {
      if (displayed) {
        setList(cvData);
      }
    });
    return () => {
      displayed = false;
      return displayed;
    };
  }, []);

  return (
    <>
      <Header fullName={list.name} profileImage={list.avatar}>
        <About
          email={list.email}
          profession={list.profession}
          address={list.address}
          website={list.website}
          phone={list.phone}
        />
      </Header>
      <Profile description={list.Profile} />
      <Experience data={list.experience} />
      <Academic data={list.academic} />
      <Skills data={list.skills} />
      <Interest data={list.interest} />
      <Languages data={list.languages} />
    </>
  );
};

export default App;
