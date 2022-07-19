import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import About from '../components/About';
import Profile from '../components/Profile';
import Experience from '../components/Experience';
import Academic from '../components/Academic';
import Skills from '../components/Skills';
import Interest from '../components/Interest';
import Languages from '../components/Languages';
import getData from '../utils/getData';
import styled from 'styled-components';

const App = () => {
  const [fetchedData, setFetchedData] = useState(null);
  const URL = 'https://lufernandomg.github.io/react-eth-challenge/data.json'

  useEffect(() => {
    const getAsyncData = async () => {
      const data = await getData(URL);
      setFetchedData(data.data);
    }

    getAsyncData();
  }, [])

  
  if (fetchedData) {
    const name = fetchedData['name'];
    const profession = fetchedData['profession'];
    const address = fetchedData['address'];
    const email = fetchedData['email'];
    const phone = fetchedData['phone'];
    const avatar = fetchedData['avatar'];
    const website = fetchedData['website'];
    const profile = fetchedData['Profile'];
    const certificate = fetchedData['certificate'];
    const academic = fetchedData['Academic'];
    const experience = fetchedData['experience'];
    const skills = fetchedData['skills'];
    const interest = fetchedData['interest'];
    const languages = fetchedData['languages'];
    const social = fetchedData['social'];
    return (
      <>
        <Header name={name} profession={profession} avatar={avatar} social={social}>
          <About address={address} email={email} phone={phone} website={website} />
        </Header>
        <Profile profile={profile} />
        <Experience experience={experience} />
        <Grid>
          <Academic certificate={certificate} academic={academic} />
          <Skills skills={skills} />
          <Interest interest={interest} />
          <Languages languages={languages} />
        </Grid>
      </>
    )
  }

  return <span>Loading...</span>
};

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
`;

export default App;
