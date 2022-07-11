import React from 'react'
import styled from 'styled-components';

const About = () => {
    return (
        <div>
            <h5 className='h3 About-title'>About</h5>
            <p className='About-item'>.Header-job-title</p>
            <div className='container-columns-txt'>
                <p className='About-item'>.Header-phone</p>
                <p className='About-item'>.Header-email</p>
                <p className='About-item'>.Header-website</p>
            </div>
            <p className='About-item'>.Header-address</p>
        </div>
    )
}

export default About