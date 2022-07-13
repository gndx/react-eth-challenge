import React, { useEffect, useState } from 'react';
import '../styles/components/styles.css';
import Header from '../components/Header';
import Profile from '../components/Profile';
import Experience from '../components/Experience';
import Academic from '../components/Academic';
import Skills from '../components/Skills';
import Interest from '../components/Interest';
import Languages from '../components/Languages';
import getData from '../utils/getData'

const d = [
  {
    "degree":"Systems Engineering",
    "institution":"Universidad Nacional Abierta y a Distancia - UNAD",
    "startDate":"2019",
    "endDate":"Present"
  },
  {
    "degree":"Technologist in Analysis and Development of Information Systems",
    "institution":"Servicio Nacional de Aprendizaje (SENA)",
    "startDate":"2016",
    "endDate":"2018"
  },
  {
    "degree":"Pharmacy Regency Technologist",
    "institution":"Universidad Nacional Abierta y a Distancia - UNAD",
    "startDate":"2007",
    "endDate":"2011"
  }
]

const f = {
  "hardSkills":[
    "Frontend Development in Vanilla JS and React",
    "UI Design in Figma",
    "Backend Development in nodeJS",
    "Database with MySQL and MongoDB"    
  ],
  "softSkills":[
    "Creative Thinking",
    "Conflict Resolution",
    "Active Listening",
    "Time Management",
    "Work ethic",
    "Problem-solving",
    "Teamwork" 
  ]
}

const i = [
  "Process Automatization",  
  "User Centered Design",
  "Share know about web development",
  "Frontend Development",
  "Video games",
  "Thriller movies and series"
]

let rr = {
  "name": "Jairo Lopez L.",
  "profession": "Web Developer",
  "address": "Palmira, Colombia.",
  "email": "jairolop88@gmail.com",
  "avatar": "https://avatars.githubusercontent.com/jairolopezlon",
  "Profile": "",
}

const App = () => {
  const [data, setData] = useState({})
  useEffect(()=>{
    const url = `https://62c7d69f8c90491c2ca85e78.mockapi.io/api/v1/user-data`    
    getData(url).then(data => setData(data[0]))
  },[])
  return (
    <>
    <div className='main-container'>                
      <Header avatar={data.avatar} email={data.email} name={data.name} profession={data.profession} />
      <div className='info-container'>
        <Profile profile={data.Profile}/>    
        <Experience experience={data.experience}></Experience>
        <Academic academic={data.academic}></Academic>
        <Languages languages={data.languages}></Languages>
        <Skills skills={data.skills}></Skills>
        <Interest interest={data.interest}></Interest>
      </div>
    </div>
    </>

  )
};

export default App;
