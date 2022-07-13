import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import Profile from '../components/Profile';
import About from '../components/About';
import Experience from '../components/Experience';
import Academic from '../components/Academic';
import Skills from '../components/Skills';
import Interest from '../components/Interest';
import Languages from '../components/Languages';
import NavBar from '../components/NavBar';
import Projects from '../components/Projects';
import getData from '../utils/getData';

const url =
  "https://github.com/kadormeli/react-eth-challenge/blob/feature/react-eth-challenge-cv-kador/data.json";

const App = () => {
  const [data, setData] = useState(undefined);

  useEffect(() => {
    getData(url)
      .then((data) => {
        console.log(data.data);
        setData(data.data);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <div
      className={`bg-gradient flex flex-col items-center pb-8 relative ${
        !data && 'h-full'
      }`}
    >
      {data && (
        <>
          <NavBar />
          <Header data={data} />
          <Profile data={data} />
          <Skills data={data} />
          <Experience data={data} />
          <Academic data={data} />
          <Projects data={data} />
          <Interest data={data} />
          <About data={data} />
          <Languages data={data} />
        </>
      )}
    </div>
  );
};

export default App;
