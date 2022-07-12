import React, {useState} from 'react';
import '../styles/components/App.styl';
import Header from '../components/Header';
import About from '../components/About';
import Profile from '../components/Profile';
import Experience from '../components/Experience';
import Academic from '../components/Academic';
import Skills from '../components/Skills';
import Interest from '../components/Interest';
import Languages from '../components/Languages';
import data from './../../api/data.json';
import AppContext from '../context/AppContext';

const App = () => {
  const [user, setUser] = useState(data.data);

  return (
    <AppContext.Provider value={user}>
      <Header>
        <About />
      </Header>
      <Profile />
      <Experience />
      <Academic />
      <Skills />
      <Interest />
      <Languages />
    </AppContext.Provider>
  )
};

export default App;
