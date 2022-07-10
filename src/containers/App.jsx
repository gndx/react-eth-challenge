import React, { useEffect, useState } from 'react';
import '../styles/components/App.styl';
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
  const [resume, setResume] = useState(null);

  const getResumeData = async () => {
    try {
      const resumeData = await getData('http://localhost:3000/data');
      setResume(resumeData);
    } catch (error) {
      console.log(error);
      setResume(undefined);
    }
  };

  useEffect(() => {
    getResumeData();
  }, []);

  if (resume === null) return <h1>...⌛️ Obtaining CV ⌛️...</h1>;
  if (typeof resume === 'undefined') return <h1>Error obtaining CV 😰</h1>;

  return (
    <>
      <Header name={resume.name} avatar={resume.avatar}>
        <About profession={resume.profession} address={resume.address} email={resume.email} website={resume.website} phone={resume.phone} />
      </Header>
      <Profile description={resume.Profile} />
      <Experience items={resume.experience} />
      <div className="Two-columns">
        <Academic items={resume.Academic} />
        <Skills items={resume.skills} />
      </div>
      <div className="Two-columns">
        <Interest items={resume.interest} />
        <Languages items={resume.languages} />
      </div>
    </>
  )
};

export default App;
