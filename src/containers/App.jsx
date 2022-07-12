import React, { useEffect, useState } from 'react';
import '../styles/components/App.styl';
import {Header} from '../components/Header';
import {Profile} from '../components/Profile';
import {Experience} from '../components/Experience';
import {Academic} from '../components/Academic';
import {Skills} from '../components/Skills';
import {Interest} from '../components/Interest';
import {Languages} from '../components/Languages';
import { getData } from '../utils/getData';

const URL_DATA = 'http://localhost:8080/data.json';

const App =  () => {
  
  const [data,setData] = useState({});
  const [load,setLoad] = useState(false);
  
  useEffect(  ()=>{
    getData(URL_DATA)
    .then(myData => {
      setData(myData);
      setLoad(true);
    });
  },[]);


  return (
    <>
      <Header name={data.name} profession={data.profession} address={data.address} 
      email={data.email} website={data.website} phone={data.phone} avatar={data.avatar}/>
      <Profile  profile={data.Profile}/>
      <Experience experience={data.experience} load={load}/>
      <div className='GradeContainer'>
        <Academic academicData={data.Academic} load={load} />
        <Skills skillsData={data.skills} load={load}/>
      </div>
      <div className='OtherAbilitiesContainer'>
        <Interest interest={data.interest}  load={load}/>
        <Languages languages={data.languages} load={load}/>
      </div>
    </>
  )
};

export default App;

