import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: block;
  justify-content: center;
  align-items: center;
  margin: 2rem;
`;
const DescriptionWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2,1fr);
  grid-template-rows: repeat(2,1fr);
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
  & h3 {
    color: #979797;
  }

  & b {
    color: #FF6D09;
  }
`;
const ItemWrapper = styled.div`
  margin: 1rem;
  padding: .8rem;
`;

function Academic({ props }) {
  return (
    <Wrapper>
      <h1 className='Academic-title'>
        Academic
      </h1>
      {
        props ? (
          <DescriptionWrapper>
            {
              props.data.Academic.map((inst) => {
                return (
                  <ItemWrapper className='Academic-item' key={inst.institution}>
                    <h3>
                      {inst.institution}
                      {' '}
                      |
                      {' '}
                      {inst.degree}
                    </h3>
                    <p>
                      <b>
                        {inst.startDate}
                        {' '}
                        -
                        {' '}
                        {inst.endDate}
                      </b>
                    </p>
                    <p>
                      {inst.description}
                    </p>
                  </ItemWrapper>
                );
              })
            }
          </DescriptionWrapper>
        ) : null
      }
    </Wrapper>
  );
};

export default Academic;
