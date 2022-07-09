import React from 'react';

const About = (props) => {

    const {
        items = new Array(3).fill('No data yet')
    } = props;

    return (
        <>
            <h3 className='About-title'>Let's get social:</h3>
            <div className='About-items'>
                {items.map((item, index) => (
                    <a key={`about-item-${index}`} className='About-item' href={item.url}>
                        <p>{item.name}</p>
                    </a>
                ))}
            </div>
        </>
    );
};

export default About;