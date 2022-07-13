import React from 'react';
import { BiBriefcase } from 'react-icons/bi';
import { Container, Span, Div } from '../styles/GlobalStyles';
import {
  Job,
  Time,
  Company,
  Title,
  Description,
  Info,
  Desc,
  Li,
  H3,
} from '../styles/Experience';

const style = { color: '#FF4A57', fontSize: '1.5em' };
function Experience({ experience = [{}, {}, {}], certificate = [{}, {}, {}] }) {
  return (
    <Container>
      <Span>
        <BiBriefcase style={style} />
        <h2 className='Experience-title'>Experience</h2>
      </Span>
      <Div>
        <ul>
          {experience?.map((exp, index) => {
            return (
              <Li key={exp.jobDescription} className='Experience-item'>
                <Job>
                  <Info>
                    <Company>{exp.company}</Company>
                    <Time>
                      {exp.startDate}
                      {' '}
                      -
                      {exp.endDate}
                    </Time>
                  </Info>
                  <Desc>
                    <Title>{exp.jobTitle}</Title>
                    <Description>{exp.jobDescription}</Description>
                  </Desc>
                </Job>
              </Li>
            );
          })}
        </ul>
        <ul>
          <H3>Certificates</H3>
          {certificate?.map((element, index) => {
            return (
              <Li key={element.description} className='Experience-item'>
                <Job>
                  <Info>
                    <Company>{element.institution}</Company>
                    <Time>{element.date}</Time>
                  </Info>
                  <Desc>
                    <Title>{element.name}</Title>
                    <Description>{element.description}</Description>
                  </Desc>
                </Job>
              </Li>
            );
          })}
        </ul>
      </Div>
    </Container>
  );
}

export default Experience;
