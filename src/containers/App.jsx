import React from 'react';
import Header from '../components/Header';
import Profile from '../components/Profile';
import About from '../components/About';
import Experience from '../components/Experience';
import Academic from '../components/Academic';
import Skills from '../components/Skills';
import Interest from '../components/Interest';
import Languages from '../components/Languages';
import NavBar from '../components/NavBar'
import Projects from '../components/Projects';


const App = () => {
  return (
    <div className="bg-gradient flex flex-col items-center pb-8">
      <NavBar />
      <Header />
      <Profile />
      <Skills />
      <Experience />
      <Academic />
      <Projects/>
      <Interest />
      <About />
      <Languages />
    </div>
  );
};

export default App;
