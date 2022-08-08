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
    color: #FF6D09;
  }
`;
const ItemWrapper = styled.div`
  margin: 1rem;
  padding: .8rem;
`;

function About({props}) {
  return (
    <Wrapper>
      <DescriptionWrapper>
        <ItemWrapper>
          <h3 className='About-title'>About</h3>
          <p className='About-item'>
            💻 {props?.profession}
          </p>
          <p className='About-item'>
            🇲🇽 {props?.phone}
          </p>
          <p className='About-item'>
            📩 {props?.email}
          </p>
          <p className='About-item'>
            🌐
            <a href={props?.website}>Landing Page</a>
          </p>
          <p className='About-item'>
            📍{props?.address}
          </p>
        </ItemWrapper>
        <ItemWrapper>
          <p className='About-item'>
            {props?.Profile}
          </p>
        </ItemWrapper>
      </DescriptionWrapper>
    </Wrapper>
  );
};

export default About;
