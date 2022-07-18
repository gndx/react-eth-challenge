import { useState, useEffect } from 'react';
import React from 'react';
import '../styles/components/App.styl';
import Header from '../components/Header';
import About from '../components/About';
import Profile from '../components/Profile';
import Experience from '../components/Experience';
import Academic from '../components/Academic';
import Skills from '../components/Skills';
import Interest from '../components/Interest';
import Languages from '../components/Languages';
import getData from '../utils/getData';



const App = () => {

const [Cv, setCv] = useState([]);
const[flag,setFlag] =React.useState({1:false})
const[exp,setExp] =React.useState([])
const[aca,setAca] =React.useState([])
const[ski,setSki] =React.useState([])
const[lan,setLan] =React.useState([])

useEffect (()=>     {

                        if(flag===true)
                        {
                          console.log(flag);
                        }
                        else
                        {
                          setFlag(!flag);
                          console.log(flag);
                          getData('http://localhost:3000/data')
                            .then((res) => {return res.json()})
                            .then((nCv) => { setCv(nCv);
                                              setExp(nCv.experience); 
                                              setAca(nCv.Academic); 
                                              setSki(nCv.skills);
                                              setLan(nCv.languages); })
                            .catch((err) => {console.log(err)});
                        }
                    });


  return (
    <>
      <Header Name={Cv.name} Image={Cv.avatar} >
        <About Profession={Cv.profession} Address={Cv.address} Phone={Cv.phone} Email={Cv.email} Website={Cv.website}/>
      </Header>
      <Profile Description={Cv.Profile}/>
      <Experience DATOSE={exp}/>
      <Academic DATOSA={aca}/>
      <Skills DATOSS={ski}/>
      <Interest DATOSI={Cv.interest}/>
      <Languages DATOSL={lan}/>
    </>
  )
};

export default App;
