import React, { useState, useEffect, createContext } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../styles/components/App.styl';
import Header from '../components/Header';
import About from '../components/About';
import Profile from '../components/Profile';
import Experience from '../components/Experience';
import Academic from '../components/Academic';
import Skills from '../components/Skills';
import Interest from '../components/Interest';
import Languages from '../components/Languages';
import AppContext from '../context/AppContext';
import initData from '../hooks/initData';

const App = () => {
  const { appLoading, data } = initData();

  const renderApp = () => (
    <AppContext.Provider value={data}>
    <Container>
        <Header>
          <About />
        </Header>
        <Profile />
        <Experience />
        <Container className='content green-bg'>
          <Row>
            <Col sm={6}>
              <Academic />  
            </Col>
            <Col sm={6}>
              <Skills />
            </Col>
          </Row>
        </Container>
        <Container className='content green-bg'>
          <Row>
            <Col sm={6}>
              <Languages />
            </Col>
            <Col sm={6}>
              <Interest />
            </Col>
          </Row>
        </Container>
      </Container>
    </AppContext.Provider>
  )

  return <>{renderApp()}</>;
};

export default App;
