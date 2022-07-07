import React, { useContext, useEffect, useState } from 'react';
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
  const [data, setData] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const response = await getData('http://localhost:3000/data');
    setData(response);
  };

  if (!data) return null;

  const {
    Academic: academics,
    address,
    avatar,
    email,
    experience: experiences,
    interest: interests,
    languages,
    name,
    phone,
    profession,
    Profile: profile,
    skills,
    website,
  } = data;

  return (
      <div className="container mx-auto max-w-screen-xl">
        <div className='flex flex-col sm:flex-row-reverse sm:m-12 shadow-2xl'>
          <div>
            <Header data={data} >
              <About data={data}/>
              <Skills skills={skills} />
              <Languages languages={languages}/>
            </Header>
          </div>
          <div className='content w-full p-12'>
            <Profile profile={profile}/>
            <hr className="mt-8 mb-12" />
            <Experience experiences={experiences}/>
            <hr className="mt-8 mb-12" />
            <Academic academics={academics}/>
            <hr className="mt-8 mb-12" />
            <Interest interests={interests}/>          
          </div>
        </div>
      </div>
  )
};

export default App;
