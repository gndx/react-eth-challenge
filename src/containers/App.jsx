import React, {useState, useEffect } from 'react';
import '../styles/components/App.styl';
import Header from '../components/Header';
import About from '../components/About';
import Profile from '../components/Profile';
import Experience from '../components/Experience';
import Academic from '../components/Academic';
import Interest from '../components/Interest';
import getData from '../utils/getData';



const App = () => {

  const [cv, setCv] = useState(null);

  useEffect(() => {
    getMyData();
  }, []);

  const getMyData = async () => {
    const { data } = await getData(
      'https://mocki.io/v1/d024d51e-ea10-4d6d-bbcc-711ea3abb482'
    );

    setCv(data);
  };


  return (
    <>
      <Header>
        <About />
      </Header>
      <Profile />
      <Experience />
      <Academic />
      <Interest />
    </>
  );
};

export default App;
