import React, { useEffect, useState, createContext } from 'react';

import {
  Header,
  About,
  Experience,
  Academic,
  Skills,
  Interest,
  Languages,
  Profile,
  Certificate
} from '../components/index.js';
import Social from '../components/Social.jsx';

import getData from '../utils/getData';

export const Context = createContext({});

const App = () => {
  const [resumeData, setResumeData] = useState({});
  const API = 'https://tiniapp5.free.beeceptor.com';

  useEffect(() => {
    getData(API)
      .then((data) => setResumeData(data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className="container">
      <Context.Provider value={resumeData}>
        <div>
          <section className="header">
            <div>
              <img className='avatar' src="https://avatars.githubusercontent.com/u/89404026?s=400&u=5eacfe3319ea4479a17b64766239e3882af94fff&v=4"></img>
            </div>
            <Header>
              <About />
            </Header>
          </section>
          <section className="profile">
            <Profile />
          </section>
          <section className="experience">
            <Experience />
          </section>
          <section className="academic">
            <Academic />
          </section>
          <section className="academic">
            <Certificate />
          </section>
          <section className="skills">
            <Skills />
          </section>
          <section className="interest">
            <Interest />
          </section>
          <section className="languages">
            <Languages />
          </section>
          <section className='social-media'>
            <Social/>
          </section>
        </div>
      </Context.Provider>
    </div>
  );
};

export default App;
