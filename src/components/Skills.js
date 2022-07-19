import React from 'react'
import styled from 'styled-components';
import SkillBar from 'react-skillbars';

const Skills = ({ skills }) => {
  const adjustedSkills = [];

  skills.map(skill => (
      adjustedSkills.push({ type: skill.name, level: skill.percentage.substr(0, 2) })
  ));

  return (
    <SkillsWrapper>
        <Title className='Skills-title Skills-item'>Skills</Title>
        <div className='Skills-item'>
          <SkillBar className='Skills-item' skills={adjustedSkills} />
        </div>
    </SkillsWrapper>
  )
}

const SkillsWrapper = styled.div`
  margin: 0 20px 20px;
  padding: 0 20px 20px;
`;

const Title = styled.h2`
  color: #1f1f1f;
`;

export default Skills;
