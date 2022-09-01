import React from 'react';
import styled from 'styled-components';
import Languages from './Languages';

const Wrapper = styled.div`
  display: block;
  justify-content: center;
  align-items: center;
  margin: 2rem;
  width: 50%;
`;
const DescriptionWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3,1fr);
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
`;

const ItemWrapper = styled.div`
  margin: 1rem;
  padding: .8rem;
  width: 16rem;
`;
function Interest({ props }) {
  return (
    <Wrapper>
      { props ? (
        <DescriptionWrapper>
          <ItemWrapper>
            <h3 className='Interest-title'>Interest</h3>
            <ul>
              {props?.data.interest.map((interest) => {
                return (
                  <li className='Interest-item' key={interest}>
                    {interest}
                  </li>
                );
              })}
            </ul>
          </ItemWrapper>
          <ItemWrapper>
            <Languages props={props}/>
          </ItemWrapper>
        </DescriptionWrapper>
      ) : null}
    </Wrapper>
  );
};

export default Interest;
