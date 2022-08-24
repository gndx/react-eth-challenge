import React, {Children, useContext} from 'react';
import AppContext from '../context/AppContext';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function About(props){ 
  const data = useContext(AppContext)
  return(
    <Container fluid className="Header-title">
      <Row>
        <Col sm={3} className="profile-pic"> 
          <img src ={data.avatar}  className = "rounded-circle"  />
        </Col>
        <Col sm={9} className="About-title">
          {props.children}
        </Col>
      </Row>
    </Container>
  )
}

export default About;

