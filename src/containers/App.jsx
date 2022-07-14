import React from 'react';
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
    <div className='bg-teal-800 min-h-screen py-5 lg:py-10 px-4'>
      <div className='container mx-auto text-white fade-in-image'>
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
        <Profile
          profile={data?.Profile}
          social={data?.social}
        />
        <Experience
          experience={data?.experience}
        />
        <div className='lg:flex lg:space-x-5'>
          <Academic
            academic={data?.Academic}
          />
          <Skills
            skills={data?.skills}
          />
          {/* Certificates */}
        </div>
        <div className='lg:flex lg:space-x-5'>
          <Interest
            interest={data?.interest}
          />
          <Languages
            languages={data?.languages}
          />
        </div>
      </div>
    </div>
  );
};

export default App;
