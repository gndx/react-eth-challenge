import React, { useEffect, useState } from 'react';

// Components
import Header from '../components/Header';
import About from '../components/About';
import Profile from '../components/Profile';
import Experience from '../components/Experience';
import Academic from '../components/Academic';
import Skills from '../components/Skills';
import Interest from '../components/Interest';
import Languages from '../components/Languages';

// Assets
import { GlobalStyles } from '../assets/styles/GlobalStyles'
import {
  Main, Group
} from './styles'

// API
import getData from '../utils/getData'

const App = () => {

  const [data, setData] = useState({})
  const [loading, setLoading] = useState(true)
  const api = async () => {

    let info = await getData("http://localhost:3000/data")        

    setData(info)
    setLoading(false)

  }
  
  useEffect(()=> {
    api()
  }, [])  

  return (
    <Main>
      <GlobalStyles />
      {loading && <div>Hola, estoy preparando la página para ti... Guapa</div>}
      {!loading &&
        <>
          <Header>
            <About data={{
              'name': data.name,
              'profession': data.profession,
              'address': data.address,
              'email': data.email,
              'website': data.website,
              'phone': data.phone,
              'avatar': data.avatar,
              'social': data.social
            }}/>
          </Header>
          <Profile data={{
            'Profile': data.Profile
          }}/>
          <Experience data={{
            'experience': data.experience
          }}/>

          <Group>
            <Academic data={{
              'Academic': data.Academic
            }}/>
            <Skills data={{
              'skills': data.skills
            }}/>
            <Interest data={{
              'interest': data.interest
            }}/>
            <Languages data={{
              'languages': data.languages
            }}/>
          </Group>
        </>
      }
    </Main>
  )
};

export default App;
