import React, {useEffect} from 'react';
import '../styles/components/App.styl';
import Header from '../components/Header';
import Social from '../components/Social';
import Profile from '../components/Profile';
import Experience from '../components/Experience';
import Certification from '../components/Certifications';
import Academic from '../components/Academic';
import Skills from '../components/Skills';
import Interest from '../components/Interest';
import Languages from '../components/Languages';

//New imports
import getData from '../utils/getData';

function App(){

  const [cvData, setCvData] = React.useState(null);

  useEffect(() => {
    // getData('https://raw.githubusercontent.com/Alextyle8/react-eth-challenge/main/data.json')
    getData('./data.json')
      .then((json) => {
        setCvData(json.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  
  return cvData ?(
    <>
      <Header info={cvData.headInfo} />
      <hr />
      <Profile profile={cvData.headInfo.profile} />
      <hr />
      <Experience experiences={cvData.experience} />
      <hr />
      <section className='Skills-box'>
        <Academic academics={cvData.academic} />
        <Certification certifications={cvData.certificate} />
      </section>
      <hr />
      <Skills skills={cvData.skills} />
      <hr />
      <section className='Interests-box'>
        <Interest interests={cvData.interest} />
        <Languages languages={cvData.languages} />
      </section>
      <hr />
      <Social socialNetworks={cvData.social} />
    </>
   ) : (
    <div>Loading...</div>
  );
};

export default App;
