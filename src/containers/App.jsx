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
    getData('https://raw.githubusercontent.com/Alextyle8/react-eth-challenge/main/data.json')
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
      <hr color="#00f"/>
      <Profile profile={cvData.headInfo.profile} />
      <hr color="#00f"/>
      <Experience experiences={cvData.experience} />
      <hr color="#00f"/>
      <section className='Skills-box'>
        <Academic academics={cvData.academic} />
        <Certification certifications={cvData.certificate} />
      </section>
      <hr color="#00f"/>
      <Skills skills={cvData.skills} />
      <hr color="#00f"/>
      <section className='Interests-box'>
        <Interest interests={cvData.interest} />
        <Languages languages={cvData.languages} />
      </section>
      <hr color="#00f"/>
      <Social socialNetworks={cvData.social} />
    </>
   ) : (
    <div>Loading...</div>
  );
};

export default App;
