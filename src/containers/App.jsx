import React, { useState, useEffect } from 'react';
import '../styles/components/App.css';
import Header from '../components/Header';
import About from '../components/About';
import Profile from '../components/Profile';
import Experience from '../components/Experience';
import Academic from '../components/Academic';
import Skills from '../components/Skills';
import Interest from '../components/Interest';
import Languages from '../components/Languages';
import getData from '../utils/getData';

const App = () => {
  const [data, setData] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      let data = await getData('http://localhost:3000/data');
      setData(data);
      console.log(data);
    };

    fetchData();
  }, []);

  if (!data.name) {
    return <div> 🛠 </div>;
  }

  return (
    <div className="app">
      <Header avatar={data.avatar} title={data.name}>
        <About
          data={{
            profession: data.profession,
            email: data.email,
            phone: data.phone,
            website: data.website,
            address: data.address,
          }}
        />
      </Header>
      <Profile description={data.Profile} />
      <Experience experiences={data.experience} />
      <div className="flex-row">
        <Academic academic={data.Academic} />
        <Skills skills={data.skills} />
      </div>
      <div className="flex-row">
        <Interest interests={data.interest} />
        <Languages languages={data.languages} />
      </div>
    </div>
  );
};

export default App;
