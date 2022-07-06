import React from 'react';
import '../styles/components/App.styl';
import { Header } from '../components/Header';
import { About } from '../components/About';
// import Profile from '../components/Profile';
// import Experience from '../components/Experience';
// import Academic from '../components/Academic';
// import Skills from '../components/Skills';
// import Interest from '../components/Interest';
// import Languages from '../components/Languages';

const user = {
  name: 'Armando Rivera',
  position: 'Frontend developer',
  phone: '+52 5563411993',
  email: 'rivera.armando0829@gmail.com',
  website: 'https://www.armandorivera.tech',
  image: 'https://www.armandorivera.tech/assets/images/armando-rivera.png',
  descriptionList: [
    'Soy un frontend centrado en la creación de productos digitales',
    'Me encanta centrarme en los detalles de las experiencias de nuevos productos',
  ],
};

const App = () => {
  return (
    <>
      <Header {...user}>
        <About {...user.descriptionList} />
      </Header>
      {/* <Header><About /></Header> */}
      {/* <Profile />
      <Experience />
      <Academic />
      <Skills />
      <Interest />
      <Languages /> */}
    </>
  );
};

export default App;
