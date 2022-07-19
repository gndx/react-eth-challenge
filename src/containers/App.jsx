import { useState, useEffect } from 'react';
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
import getData from '../utils/getData';

const App = () => 
{
  const [Cv, setCv] = useState([]);
  const API = "https://raw.githubusercontent.com/DigiCris/react-eth-challenge/main/data.json";

  useEffect(() => 
            {
              getData(API)
                .then( (nCv) => {setCv(nCv);} ); 
            }, []);

  return  (
            <>
              <Header Name={Cv.name} Image={Cv.avatar}>
                <About Profession={Cv.profession} Address={Cv.address} Phone={Cv.phone} Email={Cv.email} Website={Cv.website}/>
              </Header>
              <Profile Description={Cv.Profile} />
              <Experience data={Cv.experience} />
              <Academic data={Cv.Academic} />
              <Skills data={Cv.skills} />
              <Interest data={Cv.interest} />
              <Languages data={Cv.languages} />
            </>
          );
};

export default App;
