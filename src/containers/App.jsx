import React, { useState, useEffect } from 'react';
import '../styles/App.css';
import Header from '../components/Header';
import About from '../components/About';
import Profile from '../components/Profile';
import Experience from '../components/Experience';
import Academic from '../components/Academic';
import Skills from '../components/Skills';
import Interest from '../components/Interest';
import Languages from '../components/Languages';
// import data from '../../data.json'
import getData from '../utils/getData'

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

const url = 'https://my-json-server.typicode.com/gitguti/eth-challenge-backend/db'
const App = () => {
  // const information = {data};
  const [data, setData] = useState(false);


  useEffect(() => {
    const getDataApi = async () => {
      const response = await getData(url);
      console.log("linea 1", response);
      setData(response.data);
    }
    getDataApi();
  }, []);
  return (
    <>
    <main className="main-container">
      <Header>
        {data &&  <About {...data}/>}
      </Header>
      {data &&  <Profile profile ={data.Profile}/>}
      {data && <Academic academic={data.Academic}/> }
      {data && <Experience experience={data.experience}/>}
      {data && <Skills skills={data.skills}/> }
      <div className="container-flex">
      {data && <Interest interest = {data.interest}/>}
      {data && <Languages languages = {data.languages}/>}
      </div>
      </main>
    </>
  )
};``

export default App;
