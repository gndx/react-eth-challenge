import React, { useEffect, useState } from 'react';
import getData from '../utils/getData';
import Layout from '../components/Layout';
import Header from '../components/Header';
import About from '../components/About';
import Profile from '../components/Profile';
import Experience from '../components/Experience';
import Academic from '../components/Academic';
import Skills from '../components/Skills';
import Interest from '../components/Interest';
import Languages from '../components/Languages';
import '../styles/components/App.styl';

const initState = {
  myself: { image: '', name: '', position: '', phone: '', email: '', web: '', city: '', country: '' },
  about: [],
  profile: [],
  experiences: [],
  academics: [],
  skills: [],
  intereses: [],
  languages: [],
};

function App() {
  const [myself, setMyself] = useState(initState);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    const URL = process.env.REACT_APP_API_URL;
    getData(URL).then((res) => {
      setMyself(res);
      setLoading(false);
    });
  }, []);
  return (
    <Layout>
      <Header myself={myself.myself} loading={loading}>
        <About about={myself.about} loading={loading} />
      </Header>
      <Profile profile={myself.profile} loading={loading} />
      <Experience experiences={myself.experiences} loading={loading} />
      <Academic academics={myself.academics} loading={loading} />
      <Skills skills={myself.skills} loading={loading} />
      <Interest interests={myself.intereses} loading={loading} />
      <Languages languages={myself.languages} loading={loading} />
    </Layout>
  );
}

export default App;
