import React from 'react';
import {Titulos} from '../styles/components/About'

const About = ({
    about = Array(3).fill({
        name: '',
        url: '',
    }),
    }) => {
    return(
        <div>
            <Titulos className='About-title'>About me</Titulos>
            <ul>
                {about.map(
                    (
                        {name, url},index
                        ) => (
                    <li key={`${name}_${index}`} className="About-item">
                        <p>{name}: <a href={`${url}`}> @pinajmr </a></p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default About;