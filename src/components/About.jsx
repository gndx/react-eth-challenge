import React from 'react';

export const About = ({name, profession, address, email, website, phone}) => (
    <seccion className="About">
        <p className='About-title'>{name}</p>
        <p className='About-job-title'>{profession}</p>
        <ul className='About-contact'>
            <li className='About-item About-phone'><a href={`tel: ${phone}`}>{phone}</a></li>
            <li className='About-item About-email'><a href={`mailto: ${email}`}>{email}</a></li>
            <li className='About-item About-website'><a href={website} target="_blank">{website}</a></li>
        </ul>
        <p className='About-address'><a href='https://goo.gl/maps/wugBJ34YfQLDDd757' target="_blank">{address}</a></p>
    </seccion>
)

export default  About;