import React, { useEffect, useState } from 'react';
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

export const DataContext = React.createContext()

const App = () => {

  const [loading, setLoading] = useState({});
  const [dataFetch, setDataFetch] = useState({});

  const handleData = async () => {
    setLoading(true)
    const {data} = await getData('https://leiva-matias-api-matias-leiva.vercel.app/data');
    setDataFetch(data)
    setLoading(false)
  }

  useEffect(() => {
    handleData()
  }, [])

  return (
    <DataContext.Provider value={dataFetch}>
      {
        loading ?
          <div className="fetching">Loading...</div>
          :
          <div className="container">
            <Header>
              <About />
            </Header>
            <Profile />
            <Experience />
            <Academic />
            <Skills />
            <Interest />
            <Languages />
          </div>
      }
    </DataContext.Provider>
  )
};

export default App;
