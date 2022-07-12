import React, { useContext } from 'react';
import { ProfileContext } from '../containers/App';
import '../styles/components/About.styl';

const About = () => {
    const data = useContext(ProfileContext);
    const { address, email, name, avatar, website, phone, social = [{}] } = data;
    return (
        <>
            <img className='About-image' width="200" src={avatar} height="200" alt={name} />
            <div className='About-items'>
                <h3 className='About-title'>About me</h3>
                <ul>
                    <li className='About-item'><a href={`tel:${phone}`} target='_blank' rel='noopener noreferrer'>{phone}</a></li>
                    <li className='About-item'><a href={`mailto:${email}`} target='_blank' rel='noopener noreferrer'>{email}</a></li>
                    <li className='About-item'><a href={website} target='_blank' rel='noopener noreferrer'>{website}</a></li>
                    <li className='About-item'>{address}</li>
                </ul>
                <ul className='About-rss'>
                    {social.map((s, index) => (
                        <li className='About-item' key={index}>
                            <a href={s.url} alt={s.name}>{s.name}</a>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    )
};

export default About;
