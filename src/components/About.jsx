import React, { useState, useEffect } from 'react';
import getData from '../utils/getData';

function About() {
    const [data, setData] = useState({ social: [], certificate: [] });

    useEffect(() => {
        (async function () {
            try {
                const result = await getData();
                setData(result.data);
            } catch (e) {
                console.error(e);
            }
        })();
    }, []);

    const { certificate, social } = data;

    let keyCounter = 0;
    return (
        <div className='About-box'>
            <div className='About-left'>
                <div className='About-title'>Certificaciones</div>
                <div className='grid-container-2-col-order-col'>
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
                <div className='About-title'>Social Media</div>
                <div>
                    {social.map((item) => (
                        <div key={++keyCounter} className='About-item'>
                            <div className='About-item-name'>{item.name}</div>
                            <div className='About-item-url'>{item.url}</div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default About;
