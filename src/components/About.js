import React from 'react';
import { Div, InfoLinks, DivColumn, InfoAddress } from '../styles/About';

function About({ name, profession, address, email, website, phone }) {
  return (
    <DivColumn className='About-title'>
      <h1>{name}</h1>
      <h3>{profession}</h3>
      <Div>
        <InfoLinks href={`tel: ${phone}`} className='About-item'>
          {phone}
        </InfoLinks>
        <InfoLinks href={`mailto: ${email}`} className='About-item'>
          {email}
        </InfoLinks>
        <InfoLinks href={website} className='About-item'>
          {website}
        </InfoLinks>
      </Div>
      <InfoAddress>{address}</InfoAddress>
    </DivColumn>
  );
}

export default About;
