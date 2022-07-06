import React from 'react';
import '../styles/components/App.styl';
import { Header } from '../components/Header';
import { About } from '../components/About';
import { Profile } from '../components/Profile';
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
    'Apasionado del código y del ecosistema JavaScript',
    'Aprendiz de web3',
  ],
  description:
    'Me encanta centrarme en los detalles de las experiencias de nuevos productos con una implementación en código perfecta. Pero los grandes productos no comienzan ahí, comienzan con una sólida colaboración con los compañeros de equipo de investigación, ingeniería y productos para comprender los problemas y las circunstancias de los clientes.',
};

const App = () => {
  return (
    <>
      <Header {...user}>
        <About descriptionList={user.descriptionList} />
      </Header>
      <Profile description={user.description} />
      {/* 
      <Experience />
      <Academic />
      <Skills />
      <Interest />
      <Languages /> */}
    </>
  );
};

export default App;
