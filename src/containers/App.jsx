import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import About from '../components/About';
import Profile from '../components/Profile';
import Experience from '../components/Experience';
import Academic from '../components/Academic';
import Skills from '../components/Skills';
import Interest from '../components/Interest';
import Languages from '../components/Languages';
import { GlobalStyles, Div } from '../styles/GlobalStyles';
import Background from '../components/Background/Background';
import getData from '../utils/getData';

function App() {
  const [userData, setUserData] = useState(null);

  const getUserData = async () => {
    getData('https://raw.githubusercontent.com/Alberto-SC/react-eth-challenge/main/data.json').then(
      (response) => {
        setUserData(response.data);
      },
    );
  };

  useEffect(() => {
    getUserData();
  }, []);

  return (
    <>
      <GlobalStyles />
      <Background />
      {userData && (
        <>
          <Header avatar={userData.avatar}>
            <About
              name={userData.name}
              profession={userData.profession}
              address={userData.address}
              email={userData.email}
              website={userData.website}
              phone={userData.phone}
            />
          </Header>
          <Profile description={userData.Profile} />
          <Experience
            experience={userData.experience}
            certificate={userData.certificate}
          />
          <Div>
            <Academic academic={userData.Academic} />
            <Skills skills={userData.skills} />
          </Div>
          <Div>
            <Interest interest={userData.interest} />
            <Languages languages={userData.languages} />
          </Div>
        </>
      )}
    </>
  );
}

export default App;
