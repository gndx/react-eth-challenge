import React, { useEffect, useState } from 'react';
import '../styles/App.scss';
import Header from '../components/Header';
import Social from '../components/Social';
import Profile from '../components/Profile';
import Experience from '../components/Experience';
import Academic from '../components/Academic';
import Skills from '../components/Skills';
import Interest from '../components/Interest';
import Languages from '../components/Languages';
import Certification from '../components/Certifications';

import getData from '../utils/getData';

const App = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    getData('data.json')
      .then((json) => {
        setData(json.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return data ? (
    <>
      <Header info={data.info}></Header>
      <hr />
      <Profile profile={data.info.profile} />
      <hr />
      <Experience experiences={data.experience} />
      <hr />
      <section className="Skills-box">
        <Academic academics={data.academic} />
        <Certification certifications={data.certificate} />
      </section>
      <hr />
      <Skills skills={data.skills} />
      <hr />
      <section className="Interests-box">
        <Interest interests={data.interest} />
        <Languages languages={data.languages} />
      </section>
      <hr />
      <Social socialNetworks={data.social} />
    </>
  ) : (
    <div>Loading...</div>
  );
};

export default App;
