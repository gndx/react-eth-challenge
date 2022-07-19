import React from 'react'
import styled from 'styled-components';

const Header = ({ name, avatar, profession, children}) => {

  return (
    <HeaderContainer className='Header'>
        <Img src={avatar} className='Header-avatar'/>
        <NameContainer className='Header-title'>
        <H1 className='Header-job-title'>{name}</H1>
        <Profession className='Header-profession'>{profession}</Profession>
        {children}
        </NameContainer>
    </HeaderContainer>
  )
}

const HeaderContainer = styled.header`
    display: flex;
    flex-direction: row;
    margin: 20px;
    padding: 20px;
    position: relative;
`;

const Img = styled.img`
    border-radius: 50%;
    width: 150px;
    height: 150px;
`;

const NameContainer = styled.div`
    width: 100%;
    padding: 20px;
    margin: 20px;
`;

const H1 = styled.h1`
    margin: 0;
    padding: 0 0 10px;
    color: #1f1f1f;
`;

const Profession = styled.h2`
    margin: 0;
    padding: 0;
    text-transform: uppercase;
    font-weight: 200;
    font-size: 20px;
    color: #6d6d6d;
`;

export default Header;
