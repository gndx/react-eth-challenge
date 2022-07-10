import React from 'react';
import '../styles/components/About.styl'

const About = (props) => {

    const {
        items = new Array(3).fill('No data yet'),
        phone,
        email,
        website,
        adress,
    } = props;

    return (
        <div className='About'>
            <div className='About-contact'>
                <h3 className='Header-subtitle'>Contact:</h3>
                <p>phone: <a href={`tel:${phone}`} className='Header-phone'>{phone}</a></p>
                <p>email: <a href={`mailto:${email}`} className='Header-email'>{email}</a></p>
                <p>website: <a href={website} target="_blank" className='Header-website'>{website}</a></p>
                <p className='Header-adress'>{adress}</p>
            </div>
            <div className='About-social'>
                <h3 className='About-title'>Let's get social:</h3>
                <div className='About-items'>
                    {items.map((item, index) => (
                        <a key={`about-item-${index}`} className='About-item' href={item.url} target="_blank">
                            <i className={`fa-brands fa-${item.name}`}></i>
                        </a>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default About;