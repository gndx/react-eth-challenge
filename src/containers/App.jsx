import React from 'react';
import '../styles/App.styl'
import Header from '../components/Header';
import About from '../components/About';
import Profile from '../components/Profile';
import Experience from '../components/Experience';
import Academic from '../components/Academic';
import Skills from '../components/Skills';
import Interest from '../components/Interest';
import Languages from '../components/Languages';
import {DataContext} from '../context/DataContext';

function App() {
  
  return (
    <DataContext>
      <Header >
        <About />
      </Header>
      <Profile />
      <Experience /> 
      <div className='d-flex'>
        <Academic/>
        <Skills />
      </div>
      <div className='d-flex'>
        <Interest />
        <Languages />
      </div> 
    </DataContext>
  );
}

export default App;
