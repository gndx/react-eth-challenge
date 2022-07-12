import React, { useEffect, useState } from 'react';
import '../styles/components/App.styl';

import getData from '../utils/getData';
import Header from '../components/Header';
import About from '../components/About';
import Profile from '../components/Profile';
import Experience from '../components/Experience';
import Academic from '../components/Academic';
import Skills from '../components/Skills';
import Interest from '../components/Interest';
import Languages from '../components/Languages';


const App = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    getData('http://localhost:3000/data')
      .then((dataResponse) => {
        setData(dataResponse);
        console.log(dataResponse);
      })
      .catch((err) => {
        throw new Error(err);
      });
  }, []);

  return data ? (
    <React.Fragment>
      <Header data={data} >
        <About data={data}/>
      </Header>
      <hr />
      <Profile data={data}/>
      <hr />
      <Experience data={data}/>
      <hr />
      <section className='row-section'>
        <Academic data={data} />
        <Skills data={data} />
      </section>
      <hr />
      <section className='row-section'>
        <Interest data={data} />
        <Languages data={data} />
      </section>
    
    </React.Fragment>
  ): (
  <div>Loading...</div>
  )
};

export default App;
