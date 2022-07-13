import React, { useState, useEffect } from 'react';
// import '../styles/components/App.styl';
import Header from '../components/Header';
import About from '../components/About';
import Profile from '../components/Profile';
import Experience from '../components/Experience';
import Academic from '../components/Academic';
import Skills from '../components/Skills';
import Interest from '../components/Interest';
import Languages from '../components/Languages';
// import data from '../../data.json'
import { getData } from '../utils/getData'

// function getData() {
//   const [informacion, setInformacion] = useState([])
//   useEffect(() => {
//     fetch('http://localhost:3000/data')
//       .then(res => res.json())
//       .then(res => {
//         setInformacion(res);
//       })
//       .catch(error => console.log(error));
//   }, [])

//   console.log(informacion, 'en getData');
//   return {informacion}
// }

const url = 'http://localhost:3000/data'
const App = () => {
  // const information = {data};
  const [data, setData] = useState(false);
  if(data){
    console.log("🚀 ~ file: App.jsx ~ line 31 ~ App ~ data", data)
    console.log(data.languages)
  }

  useEffect(() => {
    const getDataApi = async () => {
      const response = await getData(url);
      setData(response);
    }
    getDataApi();
  }, []);
  return (
    <>
      <Header>
        <>
        {data &&  <Profile profile ={data.Profile}/>}
        {data &&  <About {...data}/>}
        </>
      </Header>
      {data && <Experience experience={data.experience}/>}
      {data && <Academic academic={data.Academic}/> }
      {data && <Skills skills={data.skills}/> }
      {data && <Interest interest = {data.interest}/>}
      {data && <Languages languages = {data.languages}/>}
    </>
  )
};``

export default App;
