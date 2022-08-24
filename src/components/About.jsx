import React, {useContext} from 'react';
import AppContext from '../context/AppContext';
import Badge from 'react-bootstrap/Badge';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import { 
  SiWebauthn, 
  SiMaildotru, 
  SiGooglemaps
} from "react-icons/si";

function About(props){ 
  const data = useContext(AppContext)
  return(
    <>
      <h1 className='About-title'>{data.name}</h1>
      <Container>
        <h2>{data.profession}</h2>
        <Badge pill bg="info" className='About-item Header-email'>
          <SiMaildotru size="2em" />&nbsp;&nbsp;<a href={`mailto:${data.email}`}>{data.email}</a>
        </Badge>{' '}
        <Badge pill bg="warning" text="dark" className='About-item Header-website'>
          <SiWebauthn size="2em" /> &nbsp;&nbsp;<a href={`${data.website}`} target='_blank'>{data.website}</a>
        </Badge>{' '}
        <br />
        <Badge pill bg="light" text="dark" className='About-item Header-address'>
          <SiGooglemaps size="2em" />&nbsp;&nbsp; {data.address}
        </Badge>{' '}
      </Container>
    </>
  )
}

export default About;
