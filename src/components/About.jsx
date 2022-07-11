import React from 'react';

const About = ({ data = [{}] }) => {
    return (
        <div>
            <h5 className='h4 About-title'>{data.profession}</h5>
            <p className='About-item'>{data.phone}</p>
            <p className='About-item'>{data.email}</p>
            <p className='About-item'>{data.address}</p>
            <a href='https://github.com/albbeltran' target="_blank" rel='noopener' className='About-item website'>{data.website}</a>
        </div>
    )
}

export default About