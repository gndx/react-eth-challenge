import React, { useState } from 'react';
import '../styles/components/App.styl';
import Header from '../components/Header';
import About from '../components/About';
import Profile from '../components/Profile';
import Experience from '../components/Experience';
import Academic from '../components/Academic';
import Skills from '../components/Skills';
import Interest from '../components/Interest';
import Languages from '../components/Languages';
import useGetData from '../hooks/useGetData';
import SpinnerLoader from '../components/SpinnerLoader'


const App = () => {

  const [isloading, setIsLoading] = useState(true);
  const {
    getAboutData,
    getAcademicData,
    getExperienceData,
    getHeaderData,
    getLanguagesData,
    getInterestData,
    getProfileData,
    getSkillsData,
  } = useGetData();

  setTimeout(() => {
    setIsLoading(false)
  },4000)

  return (isloading ? <SpinnerLoader /> :
    <>
      <Header data={getHeaderData()} />
      <Profile data={getProfileData()} />
      <Experience data={getExperienceData()} />
      <About data={getAboutData()} />
      <div className="Academic_skills">
        <Academic data={getAcademicData()} />
        <Skills data={getSkillsData()} />
      </div>
      <div className="Interest_languages">
        <Interest data={getInterestData()} />
        <Languages data={getLanguagesData()} />
      </div>
    </>
  );
};

export default App;
