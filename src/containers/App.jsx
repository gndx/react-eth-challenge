import React, {useEffect,useState,createContext} from 'react';
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
export const InfoContext = createContext({});

const App = () => {
  const [myInfo, setMyInfo]= useState({})
  const [loading, setLoading]= useState(true)
  useEffect(() => {
    setLoading(true);
    getData("https://raw.githubusercontent.com/leomaker1993/react-eth-challenge/main/data.json")
      .then(res => {
        setMyInfo(res.data)
        setLoading(false)
      })
  },[])

  if(loading) return 'Cargando ...  '
  else return (

    <InfoContext.Provider value={myInfo}>
      <Header>
        <About />
      </Header>
      <Profile />
      <Experience />
      <div className='container'>
      <Academic />
      <Skills />
      </div>
      <div className='container'>
      <Interest />
      <Languages />
      </div>
    </InfoContext.Provider>
  )
};

export default App;
