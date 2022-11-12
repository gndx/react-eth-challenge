import React, { useState, useEffect } from 'react';
import Header from '../components/Header.jsx';
import About from '../components/About.jsx';
import Profile from '../components/Profile.jsx';
import Experience from '../components/Experience.jsx';
import Academic from '../components/Academic.jsx';
import Skills from '../components/Skills.jsx';
import Interest from '../components/Interest.jsx';
import Languages from '../components/Languages.jsx';
import '../styles/components/dist/App.css';
import '../styles/components/dist/Header.css';
import '../styles/components/dist/Card.css';
import '../styles/components/dist/Avatar.css';
import getData from '../utils/getData.js';

const App = () => {
  const [data, setData] = useState({});
  useEffect(() => {
    getData('http://localhost:3000/data').then((resp) => {
      setData((prev) => {
        console.log(resp);
        return resp;
      });
    });
  }, []);

  return (
    <>
      <div className="App">
        <div className="App-container">
          <Header>
            <About {...data} />
          </Header>
          <Profile {...data} />
          <Experience {...data} />
          <div className="App-grid">
            <div className="div1">
              <Academic certificate={data.certificate} />
            </div>
            <div className="div2">
              <Skills skills={data.skills} />
            </div>
            <div className="div3">
              <Interest interest={data.interest} />
            </div>
            <div className="div4">
              <Languages languages={data.languages} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
