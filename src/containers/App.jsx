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

const App = () => {
  const [dataPerson, setDataPerson] = useState(false);
  useEffect(() => {
    const fetchDataPerson = async () => {
      const data = await getData('http://localhost:3000/data');
      setDataPerson(data);
      console.log(data);
    };
    fetchDataPerson();
  }, []);

  if (dataPerson === false) return <h1 className="loading">Loading...</h1>;

  if (Object.keys(dataPerson).length === 0)
    // si viene vacio y no es el primer render
    return <h1 className="not-found">Información no disponible</h1>;

  return (
    <div className="container">
      <Header name={dataPerson.name} avatar={dataPerson.avatar}>
        <About
          profession={dataPerson.profession}
          address={dataPerson.address}
          email={dataPerson.email}
          website={dataPerson.website}
          phone={dataPerson.phone}
        />
      </Header>
      <Profile Profile={dataPerson.Profile} />
      <Experience experience={dataPerson.experience} />
      <div className="row">
        <Academic Academic={dataPerson.Academic} />
        <Skills skills={dataPerson.skills} />
      </div>
      <div className="row">
        <Interest interest={dataPerson.interest} />
        <Languages languages={dataPerson.languages} />
      </div>
    </div>
  );
};

export default App;
