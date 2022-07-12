import React from 'react';
import { BsTranslate } from 'react-icons/bs';
import { Container, Span } from '../../styles/GlobalStyles';
import { Ul, H3, Li } from '../Interest/styles';

const style = { color: '#FF4A57', fontSize: '1.5em' };
function Languages() {
  return (
    <Container>
      <Span>
        <BsTranslate style={style} />
        <h2>Interest</h2>
      </Span>
      <Ul>
        <Li>
          <H3>Spanish - 100%</H3>
        </Li>
        <Li>
          <H3>English - 70%</H3>
        </Li>
        <Li>
          <H3>Aleman - 20%</H3>
        </Li>
        <Li>
          <H3>Japanese - 10%</H3>
        </Li>
      </Ul>
    </Container>
  );
}

export default Languages;
