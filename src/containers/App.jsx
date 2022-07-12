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
  const API = 'http://localhost:3000/data';

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
              <img className='avatar' src="profile-pic.jpeg"></img>
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
