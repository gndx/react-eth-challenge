import React from 'react';

function About({ data }) {
    let dataFromParent = data;
    if (typeof dataFromParent === 'undefined' || typeof dataFromParent.name === 'undefined') {
        dataFromParent = { social: [], certificate: [] };
    }
    const { certificate, social } = dataFromParent;
    let keyCounter = 0;
    return (
        <div className='About-box'>
            <div className='About-left'>
                <div className='About-title'>Certificaciones</div>
                <div className='About-`certificates`'>
                    {certificate.map((item) => (
                        <div key={++keyCounter} className='About-item'>
                            <div className='About-item-name'>{item.name}</div>
                            <div className='About-item-institution'>{item.institution}</div>
                            <div className='About-item-description'>{item.description}</div>
                            <div className='About-item-date'>{item.date}</div>
                        </div>
                    ))}
                </div>
            </div>
            <div className='About-right'>
                <div className='About-title-2'>Social Media</div>
                <div>
                    {social.map((item) => (
                        <div key={++keyCounter} className='About-item'>
                            <div className='About-item-name'>{item.name}</div>
                            <div className='About-item-url'><a href={item.url} target='_new'>{item.url}</a></div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default About;
