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

const App = () => {
  return (
    <>
      <Header
        name = "Hololulu"
        profession = "Developer"
        phone = "123"
        email = "asdas@adsas.com"
        website = "asdasd.com"
        adress = "Colombia"
        avatar = "https://picsum.photos/200"
      >
        <About
          items = {[]}
        />
      </Header>
      <Profile 
        desc = "asdasd"
      />
      <Experience
        items = {[]}
      />
      <Academic
        items = {[]}
      />
      <Certificates
        items = {[]}
      />
      <Skills
        items = {[]}
      />
      <Interest
        items = {[]}
      />
      <Languages
        items = {[]}
      />
    </>
  )
};

export default App;
