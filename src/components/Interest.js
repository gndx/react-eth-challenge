import React from 'react';
import { BiLike } from 'react-icons/bi';
import { Container, Span } from '../styles/GlobalStyles';
import { Ul, H4, Li } from '../styles/Interest';

const style = { color: '#FF4A57', fontSize: '1.5em' };
function Interest({ interest = [{}, {}, {}] }) {
  return (
    <Container>
      <Span>
        <BiLike style={style} />
        <h2 className="Interest-title">Interest</h2>
      </Span>
      <Ul>
        {interest?.map((element) => {
          return (
            <Li key={element} className="Interest-item">
              <H4>{element}</H4>
            </Li>
          );
        })}
      </Ul>
    </Container>
  );
}

export default Interest;
