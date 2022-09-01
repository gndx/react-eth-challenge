import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  justify-content: center;
  align-items: center;
  margin: 2rem;
`;
const DescriptionWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(5,1fr);
  align-items: center;
  margin: 1rem;
  width: 100%;
  & a {
    text-decoration: none;
  }
  & ul {
    line-height: 1.5em;
    margin: 5px 0 15px;
    padding: 0;
  }
  & li {
    list-style: none;
    position: relative;
    padding: 0 0 0 20px;
  }

  & i {
    color: #FF6D09;
  }

  & h3 {
    color: #979797;
  }
`;

const ItemWrapper = styled.div`
  margin: 1rem;
`;

function Skills({ props }) {
  return (
    <Wrapper>
      <h1 className='Skills-title'>
        Skills
      </h1>
      {props ? (
        <DescriptionWrapper>
          {props?.data.skills.map((skill) => {
            return (
              <ItemWrapper className='Skills-item' key={skill.name}>
                <p>
                  {skill.name}
                  {' '}
                  -
                  {' '}
                  {skill.percentage}
                </p>
              </ItemWrapper>
            );
          })}
        </DescriptionWrapper>
      ) : null}
    </Wrapper>
  );
};

export default Skills;
