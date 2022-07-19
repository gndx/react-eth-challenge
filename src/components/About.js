import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faMapLocation } from '@fortawesome/free-solid-svg-icons'
import { faPhone } from '@fortawesome/free-solid-svg-icons'
import { faGlobe } from '@fortawesome/free-solid-svg-icons'
import styled from 'styled-components'

const About = ({ address, email, phone, website }) => {
  return (
    <AboutContainer className='About-title'>
      <ItemContainer className='About-item'>
        <FontAwesomeIcon icon={faMapLocation} />
        <AboutItem>{address}</AboutItem>
      </ItemContainer>
      <ItemContainer className='About-item'>
        <FontAwesomeIcon icon={faEnvelope} />
        <AboutItem><a href={`mailto:${email}`}>Send me a Email!</a></AboutItem>
      </ItemContainer>
      <ItemContainer className='About-item'>
        <FontAwesomeIcon icon={faPhone} />
        <AboutItem><a href={`tel:${phone}`}>Send me a WhatsApp!</a></AboutItem>
      </ItemContainer>
      <ItemContainer className='About-item'>
        <FontAwesomeIcon icon={faGlobe} />
        <AboutItem><a href={website}>Visit my website</a></AboutItem>
      </ItemContainer>
    </AboutContainer>
  )
}

const AboutContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding-right: 100px;
  width: 60vw;
  bottom: 20px;
  position: absolute;
`;

const ItemContainer = styled.div`
  display: flex;
  align-items: center;
`;

const AboutItem = styled.p`
  color: #3d3d3d;
  margin: 0;
  padding: 0;
  padding-left: 10px;
  text-transform: lowercase;

  a {
    color: #5d5d5d;
    text-decoration: none;
  }
`;

export default About;
