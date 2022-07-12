import React from 'react';
import { BsTrophy } from 'react-icons/bs';
import { Container, Span } from '../styles/GlobalStyles';
import {
  Section,
  SkillsContainer,
  Card,
  Name,
  SkillLevel,
  Wave,
  Frame,
  getIconContainer,
} from '../styles/Skills';

const style = { color: '#FF4A57', fontSize: '1.5em' };
function Skills({ skills = [{}, {}, {}] }) {
  return (
    <Container>
      <Span>
        <BsTrophy style={style} />
        <h2 className="Skills-title">Skills</h2>
      </Span>
      <Section>
        <SkillsContainer>
          {skills?.map((skill, index) => {
            return (
              <Card key={(skill, index)} className="Skills-item">
                {getIconContainer(skill.name)}
                <SkillLevel>{skill.percentage}</SkillLevel>
                <Name>{skill.name}</Name>
                <Frame>
                  <Wave percentage={skill.percentage} />
                </Frame>
              </Card>
            );
          })}
        </SkillsContainer>
      </Section>
    </Container>
  );
}

export default Skills;
