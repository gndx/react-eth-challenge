import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../components/Home";
import About from "../components/About";
import Resume from '../components/Resume';
import Skills from '../components/Skills';
import HomeCard from '../components/HomeCard';
import NotFound from "../components/NotFound";
import ErrorData from "../components/ErrorData";
import Loading from "../components/Loading";



import {
  retrieveCurriculumVitae,
  curriculumVitae
} from '../store/curriculumVitae/curriculumVitaeSlice';

import {
  getTheme,
  selectLocal
} from '../store/application/aplicationSlice';

const App = () => {
  const dispatch = useDispatch();
  const { cv, loading, error } = useSelector(curriculumVitae);
  const { name, profession, address, email, website, phone, avatar, profile, certificate, academic, experience, skills, interest, languages, social } = cv;

  const local = useSelector(selectLocal);

  const homeCard = <HomeCard 
  social={social} 
  avatar={avatar} 
  name={name} 
  profession={profession} 
  address={address} 
  email={email} 
  phone={phone}
  website={website}/>;

  useEffect(() => {
    dispatch(retrieveCurriculumVitae())
    dispatch(getTheme())
  }, []);

  if (error) {
    return <ErrorData />;
  }

  if (loading) {
    return <Loading/>;
  }

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={
            <Home>
              {homeCard}
            </Home>}>
            
            <Route index element={<About 
            profile={profile}>
              {homeCard}
            </About>} />
            
            <Route path="about" element={<About 
            profile={profile}>
              {homeCard}
            </About>} />
            
            <Route path="resume" element={<Resume 
            local={local} 
            academic={academic} 
            experience={experience} 
            certificate={certificate}/>} />
            
            <Route path="skills" element={<Skills 
            local={local} 
            skills={skills} 
            languages={languages} 
            interest={interest}/>} />
                        
          </Route>

          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  )
};

export default App;
