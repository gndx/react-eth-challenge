import React, { useContext } from 'react';
import { ProfileContext } from '../containers/App';

const About = () => {
    const data = useContext(ProfileContext);
    const { address, email, website, phone } = data;
    return (
        <>
            <h3 className='About-title'>About me</h3>
            <ul>
                <li className='About-item'><a href={`tel:${phone}`} target='_blank' rel='noopener noreferrer'>{phone}</a></li>
                <li className='About-item'><a href={`mailto:${email}`} target='_blank' rel='noopener noreferrer'>{email}</a></li>
                <li className='About-item'><a href={website} target='_blank' rel='noopener noreferrer'>{website}</a></li>
                <li className='About-item'>{address}</li>
            </ul>
        </>
    )
};

export default About;
