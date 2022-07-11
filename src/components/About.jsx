import React from 'react'

const About = ({data}) => {
    return (
        <div>
            <h5 className='h4 About-title'>{data.profession}</h5>
            <div className='container-columns-txt'>
                <p className='About-item'>{data.phone}</p>
                <p className='About-item'>{data.email}</p>
                <p className='About-item'>{data.website}</p>
            </div>
            <p className='About-item'>{data.address}</p>
        </div>
    )
}

export default About