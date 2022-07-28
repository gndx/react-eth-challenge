import React from "react";
import Badge from 'react-bootstrap/Badge';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import { 
  SiWebauthn, 
  SiMaildotru, 
  SiGooglemaps
} from "react-icons/si";

function About(props){ 

  return(
    <>
      <h1 className='About-title'>.Header-title</h1>
      <Container>
        <h2>h2</h2>
        <Badge pill bg="info" className='About-item Header-email'>
          <SiMaildotru size="2em" />&nbsp;&nbsp;<a href={`mailto:`}>Email</a>
        </Badge>{' '}
        <Badge pill bg="warning" text="dark" className='About-item Header-website'>
          <SiWebauthn size="2em" /> &nbsp;&nbsp;<a href="website.com" target='_blank'>Website</a>
        </Badge>{' '}
        <br />
        <Badge pill bg="light" text="dark" className='About-item Header-address'>
          <SiGooglemaps size="2em" />&nbsp;&nbsp; address
        </Badge>{' '}
      </Container>
    </>
  )
}

export default About;
