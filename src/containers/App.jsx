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
import useDataFetch from '../hooks/useDataFetch';

const App = () => {

  const { dataFetch, isLoading } = useDataFetch();

  if (isLoading) return <div>Loading...</div>;

  return (
    <>
      <Header
        name={dataFetch.name}
        profession={dataFetch.profession}
      >
        <About
          phone={dataFetch.phone}
          email={dataFetch.email}
          website={dataFetch.website}
          adress={dataFetch.adress}
        />
      </Header>
      <Profile profile={dataFetch.Profile} />
      <Experience experience={dataFetch.experience} />
      <div className='Container-section-double'>
        <Academic academic={dataFetch.Academic} />
        <Skills skills={dataFetch.skills} />
      </div>
      <div className='Container-section-double'>
        <Interest interest={dataFetch.interest} />
        <Languages languages={dataFetch.languages} />
      </div>
    </>
  );
};

export default App;
