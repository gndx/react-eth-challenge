import React from 'react';
import { BiLike } from 'react-icons/bi';
import { Container, Span } from '../../styles/GlobalStyles';
import { Ul, H3, Li } from './styles';

const style = { color: '#FF4A57', fontSize: '1.5em' };
function Interest() {
  return (
    <Container>
      <Span>
        <BiLike style={style} />
        <h2>Languages</h2>
      </Span>
      <Ul>
        <Li>
          <H3>javascript</H3>
        </Li>
        <Li>
          <H3>Blockchain</H3>
        </Li>
        <Li>
          <H3>Front end</H3>
        </Li>
        <Li>
          <H3>React </H3>
        </Li>
      </Ul>
    </Container>
  );
}

export default Interest;
