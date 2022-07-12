import React from 'react';
import { BiBriefcase } from 'react-icons/bi';
import { Container, Span } from '../../styles/GlobalStyles';
import {
  Job,
  Time,
  Company,
  Title,
  Description,
  Info,
  Desc,
  Li,
} from './styles';
// GrTrophy
const style = { color: '#FF4A57', fontSize: '1.5em' };
function Experience() {
  return (
    <Container>
      <Span>
        <BiBriefcase style={style} />
        <h2>Experience</h2>
      </Span>
      <ul>
        <Li>
          <Job>
            <Info>
              <Company>Company: PugStar</Company>
              <Time>Jan 2020 - present</Time>
            </Info>
            <Desc>
              <Title>Frontend developer</Title>
              <Description>
                scratch the furniture. Good now the other hand, too lay on arms
                while you're using the keyboard
              </Description>
            </Desc>
          </Job>
        </Li>
        <Li>
          <Job>
            <Info>
              <Company>Company: PugStar</Company>
              <Time>Jan 2020 - present</Time>
            </Info>
            <Desc>
              <Title>Frontend developer</Title>
              <Description>
                scratch the furniture. Good now the other hand, too lay on arms
                while you're using the keyboard
              </Description>
            </Desc>
          </Job>
        </Li>
        <Li>
          <Job>
            <Info>
              <Company>Company: PugStar</Company>
              <Time>Jan 2020 - present</Time>
            </Info>
            <Desc>
              <Title>Frontend developer</Title>
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

export default Experience;
