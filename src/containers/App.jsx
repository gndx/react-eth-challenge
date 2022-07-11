import React, { useEffect, useState } from 'react';
import './App.css';
import Header from '../components/Header';
import About from '../components/About';
import Profile from '../components/Profile';
import Experience from '../components/Experience';
import Academic from '../components/Academic';
import Skills from '../components/Skills';
import Interest from '../components/Interest';
import Languages from '../components/Languages';
import getData from '../utils/getData';
import Card from '../components/Card';

const urlBase = window.location.href;

const App = () => {
  const [info, setInfo] = useState();
  useEffect(() => {
    async function getInfo() {
      const data = await getData(`${urlBase}/data.json`);
      setInfo(data.data);
    }

    getInfo();
  }, []);

  if (!info) {
    return null;
  }

  return (
    <div className="app">
      <div className="container">
        <div className="cv-container">
          <Header>
            <Card>
              <div className="avatar-container">
                <img
                  src={info.avatar}
                  width="128"
                  height="128"
                  alt={info.Profile}
                />
              </div>
            </Card>
            <Card>
              <Profile info={info} />
            </Card>
          </Header>
          <div className="section-container">
            <Experience experience={info.experience} />
            <Academic academic={info.Academic} />
          </div>
          <div className="section-container">
            <Skills skills={info.skills} />
            <Interest interests={info.interest} />
          </div>
          <div>
            <Languages languages={info.languages} />
          </div>
          <div>
            <About social={info.social} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
