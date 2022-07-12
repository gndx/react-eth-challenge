import React from 'react';
import { Div, InfoLinks, DivColumn, InfoAddress } from './styles';

function About() {
  return (
    <DivColumn>
      <h1>Alberto Silva</h1>
      <h3>Front end developer</h3>
      <Div>
        <InfoLinks href="tel: +52 5540969864">+52 5540969864</InfoLinks>
        <InfoLinks href="mailto: silvacazaresluis@outlook.com">
          silvacazaresluis@outlook.com
        </InfoLinks>
        <InfoLinks href="https://github.com/Alberto-SC">
          https://github.com/Alberto-SC
        </InfoLinks>
      </Div>
      <InfoAddress>CDMX, México</InfoAddress>
    </DivColumn>
  );
}

export default About;
