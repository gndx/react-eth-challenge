import React from 'react'
import styled from 'styled-components';
import SkillBar from 'react-skillbars';

export default function Languages({ languages }) {
  const adjustedLanguages = [];

  languages.map(language => (
    adjustedLanguages.push({ type: language.name, level: language.percentage.substr(0, 2) })
  ));

  return (
    <LanguagesWrapper>
        <Title className='Languages-title Languages-item'>Languages</Title>
        <div className='Languages-item'>
          <SkillBar className='Languages-item' skills={adjustedLanguages} />
        </div>
    </LanguagesWrapper>
  )
}

const LanguagesWrapper = styled.div`
  margin: 0 20px 20px;
  padding: 0 20px 20px;
`;

const Title = styled.h2`
  color: #1f1f1f;
`;
