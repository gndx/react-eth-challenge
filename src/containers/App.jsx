import React from 'react';
import '../styles/components/App.styl';
import Header from '../components/Header';
import About from '../components/About';
import Profile from '../components/Profile';
// import Experience from '../components/Experience';
// import Academic from '../components/Academic';
// import Skills from '../components/Skills';
// import Interest from '../components/Interest';
// import Languages from '../components/Languages';
import { useData } from '../hooks/useData';

function App() {
  const { data } = useData();
  return (
    <div className='container mx-auto mb-10'>
      <Header>
        <About
          name={data?.name}
          profession={data?.profession}
          social={data?.social}
          address={data?.address}
          phone={data?.phone}
          email={data?.email}
          websiite={data?.websiite}
          img={data?.avatar}
        />
      </Header>
      <Profile
        profile={data?.Profile}
        social={data?.social}
      />
      {/* <Experience />
      <Academic />
      <Skills />
      <Interest />
      <Languages /> */}
    </div>
  );
};

export default App;
