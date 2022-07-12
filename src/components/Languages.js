import React from 'react';
import { BsTranslate } from 'react-icons/bs';
import { Container, Span } from '../styles/GlobalStyles';
import { Ul, H4, Li } from '../styles/Interest';

const style = { color: '#FF4A57', fontSize: '1.5em' };
function Languages({ languages = [{}, {}, {}] }) {
  return (
    <Container>
      <Span>
        <BsTranslate style={style} />
        <h2 className='Languages-title'>Languages</h2>
      </Span>
      <Ul>
        {languages?.map((element, index) => {
          return (
            <Li key={element.name}>
              <H4 className='Languages-item'>
                {element.name}
                {' '}
                -
                {element.percentage}
              </H4>
            </Li>
          );
        })}
      </Ul>
    </Container>
  );
}

export default Languages;
