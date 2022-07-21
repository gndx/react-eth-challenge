import { Row, Col } from 'antd';
import React,  { useEffect, useState } from 'react';
import '../styles/components/App.styl';
import {Header} from '../components/Header';
import About from '../components/About';
import Profile from '../components/Profile';
import Experience from '../components/Experience';
import Academic from '../components/Academic';
import Skills from '../components/Skills';
import Interest from '../components/Interest';
import Languages from '../components/Languages';
import getData from '../utils/getData';

const App = () => {

  const [dataCv, setDataCv] = React.useState({});

   useEffect(() => {
    getData('https://raw.githubusercontent.com/LuisFelipe09/react-eth-challenge/main/data.json')
      .then((json) => {
        setDataCv(json);
      })
      .catch((err) => {
        console.log(err);
      });
   }, []);

  return (
    <Row>
      <Col span={24}>
        <Header {...dataCv.data}>
          <About {...dataCv.data} />
        </Header>
      </Col>
      <Col span={24}>
        <Profile {...dataCv.data} />
      </Col>
      <Col span={24}>
        <Experience {...dataCv.data} />
      </Col>
      <Col span={12}>
        <Academic {...dataCv.data} />
      </Col>
      <Col span={12}>
        <Skills {...dataCv.data} />
      </Col>
      <Col span={12}>
        <Interest {...dataCv.data} />
      </Col>
      <Col span={12}>
        <Languages {...dataCv.data} />
      </Col>
    </Row>
  )
};

export default App;
