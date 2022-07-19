import React from 'react';
import styled from 'styled-components';

const Experience = ({ experience }) => {
  return (
    <ExperienceContainer>
      <Title className='Experience-title'>My Experience</Title>
      <ExperienceWrapper>
        {experience.map((expItem, idx) => (
          <div className="Experience-item" key={idx}>
            <h3>{expItem.jobTitle}</h3>
            <h4>{expItem.company}</h4>
            <DateContainer>
              <p>{expItem.startDate}</p>
              -
              <p>{expItem.endDate}</p>
            </DateContainer>
            <p>{expItem.jobDescription}</p>
          </div>
        ))}
      </ExperienceWrapper>
    </ExperienceContainer>
  );
};

const ExperienceContainer = styled.div`
  margin: 0 20px 20px;
  padding: 0 20px 20px;
`;

const Title = styled.h2`
  color: #1f1f1f;
`;

const ExperienceWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: start;

  .Experience-item {
    width: 100%;
  }
`;

const DateContainer = styled.div`
  display: flex;
  width: 30%;
  align-items: center;
  justify-content: space-between;
`;

export default Experience;
