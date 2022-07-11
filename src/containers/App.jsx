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

const API = 'https://raw.githubusercontent.com/santi1234567/react-eth-challenge/main/data.json';

export default function App() {

  const [cvData, setcvData] = useState(null);

  useEffect(() => {
    getData(API)
      .then((data) => {
        setcvData(data.data);
      });
  }, []);
  return (

    <div>
      {console.log(cvData)}
      {
        cvData && (
          <div>
            <Header key='Header' data={cvData}>
              <About data={cvData} />
            </Header>
            <Profile data={cvData} />
            <Experience key='Experience' data={cvData} />
            <div>
              <Academic data={cvData} />
              <Skills data={cvData} />

            </div>
            <div>
              <Interest data={cvData} />
              <Languages data={cvData} />

            </div>
          </div>
        )
      }
    </div>
  );
};

