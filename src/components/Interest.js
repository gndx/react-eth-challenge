import React from 'react'
import styled from 'styled-components';

const Interest = ({ interest }) => {
  return (
    <InterestWrapper>
      <h1 className='Interest-title'>Interest</h1>
      {interest.map((tag, idx) => (
        <InterestTag className='Interest-item' key={idx}>{tag}</InterestTag>
      ))}
    </InterestWrapper>
  )
}

const InterestWrapper = styled.div`
  padding: 0 20px 20px;
  margin: 0 20px 20px;
`;

const InterestTag = styled.span`
  color: white;
  margin-right: 30px;
  padding: 15px;
  border-radius: 5px;
  background-color: #ad6747;
`;

export default Interest;

