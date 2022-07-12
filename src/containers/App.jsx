import React from 'react';
import '../styles/components/App.styl';
import Header from '../components/Header';
import About from '../components/About';
import Experience from '../components/Experience';
import Academic from '../components/Academic';
import Languages from '../components/Languages';
import Profile from '../components/Profile';
import Interest from '../components/Interest';

export default function App() {
  return (
    <>
      <Header>
        <About />
      </Header>
      <main>
        <Experience />
        <Academic />
        <Languages />
        <Profile />
        <Interest />
      </main>
    </>
  );
}
