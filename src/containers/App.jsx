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
import { useData } from '../hooks/useData';

function App() {
  const { data } = useData();

  return (
    <div className='container mx-auto mb-10'>
      <Header>
        <About
          name={data?.name}
          profession={data?.profession}
          social={data?.social}
          address={data?.address}
          phone={data?.phone}
          email={data?.email}
          websiite={data?.websiite}
          img={data?.avatar}
        />
      </Header>
      <div>
        <Profile
          profile={data?.Profile}
          social={data?.social}
        />
      </div>
      <div>
        <Experience
          experience={data?.experience}
        />
      </div>
      <div className='grid grid-cols-2 mob:grid-cols-1 laptop:grid-cols-2 gap-6'>
        <Academic
          academic={data?.Academic}
        />
        <Skills
          skills={data?.skills}
        />
      </div>
      <div className='grid grid-cols-2 mob:grid-cols-1 laptop:grid-cols-2 gap-6'>
        <Interest
          interest={data?.interest}
        />
        <Languages
          languages={data?.languages}
        />
      </div>
    </div>
  );
};

export default App;
