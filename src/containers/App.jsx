import React from 'react';
import '../styles/components/App.styl';
import Header from '../components/Header';
import About from '../components/About';
import Profile from '../components/Profile';
import Experience from '../components/Experience';
import Academic from '../components/Academic';
import Skills from '../components/Skills';
import Interest from '../components/Interest';
import Languages from '../components/Languages';
import { useGetData } from '../hooks/useGetData';

const App = () => {
  const { data, loading, error } = useGetData(
    'http://localhost:8080/data.json'
  );

  if (loading) return <p>cargando..</p>;
  if (error) return <p>A occurido un error</p>;

  const header = {
    address: data.address,
    avatar: data.avatar,
    email: data.email,
    name: data.name,
    phone: data.phone,
    professional: data.profession,
    website: data.website,
  };

  return (
    <>
      <Header data={header}>
        <About />
      </Header>
      <Profile profile={data.Profile} />
      <Experience data={data.experience} />
      <Academic data={data.Academic} />
      <Skills data={data.skills} />
      <div className='last'>
        <Interest data={data.interest} />
        <Languages data={data.languages} />
      </div>
    </>
  );
};

export default App;
