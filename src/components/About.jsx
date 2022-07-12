import React from 'react';
import '../styles/components/Item.styl';

function About({profession, phone, email, website, address}){
    return (
        <about className="Item-content">
            <h3 className="About-title">{profession}</h3>
            <span><h5 className="About-item">{phone}</h5> - <h5 className="About-item">{email}</h5> - <h5 className="About-item">{website}</h5></span>
            <span><h5>{address}</h5></span>
        </about>
    );
}

export default About;