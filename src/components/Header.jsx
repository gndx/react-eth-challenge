import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function About(props){ 
  return(
    <Container fluid className="Header-title">
      <Row>
        <Col sm={3} className="profile-pic"> 
          <img src ="https://via.placeholder.com/150"  className = "rounded-circle"  />
        </Col>
        <Col sm={9} className="About-title">
          {props.children}
        </Col>
      </Row>
    </Container>
  )
}

export default About;

