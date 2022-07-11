import React from 'react';
import styled from 'styled-components';
import Heading from '../styles/Heading';
import About from './About'

const Header = ({data}) => {
    return (
        <Heading className='container-columns header'>
            <div className='thumb'>
                <img src={data.avatar}></img>
            </div>
            <div className='content'>
                <h1 className='h2 title Header-title'>{data.name}</h1>
                <About data={data}/>
            </div>
        </Heading>
    )
}

export default Header;