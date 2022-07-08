import React, { useState, useEffect } from 'react';
import getData from '../utils/getData';
 
const About = () => {
    const [data, setData] = useState({social: [], certificate: []});

    useEffect(() => {
        (async function() {
            try {
                let result = await getData();
                setData(result.data);
            } catch(e) {
                console.error(e);
            }
        })();
    }, []);

    const {social, certificate} = data;

    let keyCounter = 0;
    return (
        <div>
            <div className="About-title">Sobre mi</div>
            <div className="About-sub-title">Certificaciones</div>
            <div>{certificate.map( (item) => (
                    <div key={++keyCounter} className="About-item">
                        <div className="About-item-name">{item.name}</div>
                        <div className="About-item-institution">{item.institution}</div>
                        <div className="About-item-description">{item.description}</div>
                        <div className="About-item-date">{item.date}</div>
                    </div>
                )
            )}
            </div>
            <div className="About-sub-title">Social Media</div>
            <div>{social.map( (item) => (
                    <div key={++keyCounter} className="About-item">
                        <div className="About-item-name">{item.name}</div>
                        <div className="About-item-url">{item.url}</div>
                    </div>
                )
            )}
            </div>
        </div>
    );
};
 
export default About;