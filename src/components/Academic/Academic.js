import React from 'react';
import { MdSchool } from 'react-icons/md';
import { Container, Span } from '../../styles/GlobalStyles';
import {
  Li,
  Job,
  Info,
  School,
  Time,
  Desc,
  Degree,
  Description,
} from './styles.js';

const style = { color: '#FF4A57', fontSize: '1.5em' };
function Academic() {
  return (
    <Container>
      <Span>
        <MdSchool style={style} />
        <h2>Academic</h2>
      </Span>
      <ul>
        <Li>
          <Job>
            <Info>
              <School>Company: PugStar</School>
              <Time>Jan 2020 - present</Time>
            </Info>
            <Desc>
              <Degree>Frontend developer</Degree>
              <Description>
                scratch the furniture. Good now the other hand, too lay on arms
                while you're using the keyboard
              </Description>
            </Desc>
          </Job>
        </Li>
      </ul>
    </Container>
  );
}

export default Academic;
