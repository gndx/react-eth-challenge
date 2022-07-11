import React from 'react';
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
import Card from '../components/Card.jsx';

const App = () => {
  return (
    <>
      <div className="App">
        <div className="App-container">
          <Header>
            <About />
          </Header>
          <Profile />
          <Experience />
          <div className="App-grid">
            <div className="div1">
              <Academic />
            </div>
            <div className="div2">
              <Skills />
            </div>
            <div className="div3">
              <Interest />
            </div>
            <div className="div4">
              <Languages />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
