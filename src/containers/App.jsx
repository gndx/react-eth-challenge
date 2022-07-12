import React, { useState, useEffect } from 'react';
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

  const getCVData = async () => {
    const { data }  = await getData('data.json');
    setData(data);
  };

  useEffect(() => {
    getCVData();
  }, []);

  if (!data) return null;
  else {

    return (
      <>
        <Header name={data.name} avatar={data.avatar}>
          <About profession={data.profession}
        phone={data.phone} email={data.email} website={data.website} address={data.address} />
        </Header>
        <Profile profile={data.Profile} />
        <Experience experience={data.experience} />
        <div className="double-column">
          <Academic academic={data.Academic} /> 
          <Skills skills={data.skills}/>
        </div>
        <div className="double-column">
          <Languages languages={data.languages} /> 
          <Interest interest={data.interest}/>
        </div>
      </>
    )
  }
};

export default App;
