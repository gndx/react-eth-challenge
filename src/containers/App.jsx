import React from 'react';
import '../styles/components/App.styl';
import  Header from '../components/Header';
import  About  from '../components/About';
import Profile from '../components/Profile';
import Experience from '../components/Experience';
import Academic from '../components/Academic';
import Skills  from '../components/Skills';
import Interest from '../components/Interest';
import Languages  from '../components/Languages';


const user = {
  name: 'José Piña',
  profession: 'Smart Contract Dev',
  address: 'Toulouse',
  phone: '+53 7777 222 ',
  email: 'josepina@pinalikefruit.com',
  website: 'https://pinalikefruit.com',
  avatar: 'https://static.platzi.com/media/avatars/avatars/pinajmr_b5b96ec3-2bc7-4de3-b14b-08e1645dc578.jpeg',
  Profile: "I'm Piña. Yes, like fruit in traslated into spanish, I'm a Smart Contract Developer in continuous learning working mainly with DeFi protocol"
}

const App = () => {
  return (
    <>
      <Header />
        <About/>
      <Header/>
      <Profile />
      <Experience />
      <Academic />
      <Skills />
      <Interest />
      <Languages />
    </>
  )
};

export default App;
