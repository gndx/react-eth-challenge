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
import Certificates from '../components/Certificates';
import useGetProducts from '../hooks/useGetData';

const API = "http://localhost:3000/data"

const App = () => {

  const data = useGetProducts(API);

  return (
    <div className='Main-content'>
      <Header
        name = {data.name}
        profession = {data.profession}
        avatar = {data.avatar}
      >
        <About
          items = {data.social}
          phone = {data.phone}
          email = {data.email}
          website = {data.website}
          adress = {data.address}
        />
      </Header>
      <Profile 
        desc = {data.profile}
      />
      <Experience
        items = {data.experience}
      />
      <Academic
        items = {data.academic}
      />
      <Certificates
        items = {data.certificate}
      />

      <Skills
        items = {data.skills}
      />
      <Interest
        items = {data.interest}
      />
      <Languages
        items = {data.languages}
      />
    </div>
  )
};

export default App;
