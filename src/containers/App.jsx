import React, { useState, useEffect } from "react";
import getData from "../utils/getData";
import '../styles/components/App.styl';
import Header from '../components/Header';
import About from '../components/About';
import Profile from '../components/Profile';
import Experience from '../components/Experience';
import Academic from '../components/Academic';
import Skills from '../components/Skills';
import Interest from '../components/Interest';
import Languages from '../components/Languages';

const App = () => {
  const [userData, setUserData] = useState();
  const [waitingUser, setWaitingUser] = useState(true);

  useEffect(() => {

    const getUserData = async () => {

      const data = await getData('http://localhost:3000/data');
      setUserData(data);

      setWaitingUser(false);
    }

    getUserData();
  }, []);

  return (
    <>
      {(userData) &&
        <>
          < Header userData={userData}  >
            <About userData={userData} />
          </Header >
          <Profile userData={userData} />
          <Experience userData={userData} />
          <div className='Academic-segment'>
            <Academic userData={userData} />
            <Skills userData={userData} />
          </div>
          <div className='Extra-segment'>
            <Interest userData={userData} />
            <Languages userData={userData} />
          </div>
        </>
      }
    </>
  )
};

export default App;
