import React, { Fragment, useEffect, useState } from 'react';
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


export default function App() {
  
  const url = 'https://raw.githubusercontent.com/joelesdar/JSON-API-React-Challenge/gh-pages/data.json';
  const [data, setData] = useState(null);

  useEffect(() => {
    getData(url)
      .then((data) => {
        setData(data.data);
      });
  }, []);
  return (

    <Fragment>
      {
        data && (
          <div>
            <Header key='Header' data={data}>
              <About data={data} />
            </Header>
            <Profile data={data} />
            <Experience key='Experience' data={data} />
            <div className='container'>
              <div className="row">
                <Academic data={data} />
                <Skills data={data} />
                <Interest data={data} />
                <Languages data={data} />
              </div>
            </div>
          </div>
        )
      }
    </Fragment>
  );
};

