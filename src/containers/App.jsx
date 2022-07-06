import React from 'react';
import '../styles/components/App.styl';
import Layout from '../components/Layout';
import Header from '../components/Header';
import About from '../components/About';
import Profile from '../components/Profile';
import Experience from '../components/Experience';
import Academic from '../components/Academic';
import Skills from '../components/Skills';
import Interest from '../components/Interest';
import Languages from '../components/Languages';

function App() {
  return (
    <Layout>
      <Header>
        <About />
      </Header>
      <Profile />
      <Experience />
      <Academic />
      <Skills />
      <Interest />
      <Languages />
    </Layout>
  );
}

export default App;
