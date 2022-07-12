import React from 'react';
import {Titulos} from '../styles/components/About'

const About = () => {
    return(
        <div>
            <Titulos className='About-title'>About me</Titulos>
            <div className='About-item'>
                <p>Email: <a href="mailto:">josepina@pinalikefruit.com</a></p>
            </div>
            <div className='About-item'>
                <p>Github: <a href="https://github.com/pinajmr">@pianjmr</a></p>
            </div>
            <div className='About-item'>
                <p>Linkedin: <a href="https://www.linkedin.com/in/pinajmr/">@pinajmr</a></p>
            </div>
            <div className='About-item'>
                <p>website <a href="https://pinalikefruit.com">pinalikefruit.com</a></p>
            </div>
        </div>
    )
}

export default About;