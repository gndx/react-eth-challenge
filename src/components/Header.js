import React from 'react';
import styled from 'styled-components';
import Heading from '../styles/Heading';
import About from './About'

const Header = () => {
    return (
        <Heading className='container-columns header'>
            <div className='thumb'>
                <img src='https://clipart.info/images/ccovers/1531010991winking-emoji-png.png'></img>
            </div>
            <div className='content'>
                <h1 className='h2 title'>.Header-title</h1>
                <About />
            </div>
        </Heading>
    )
}

export default Header;