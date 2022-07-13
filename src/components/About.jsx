import React from 'react';

const About = ({address,email,phone,profession,website}) => {
        return (
            <article>
                <h2 className='About-title'>Desarrollador Genexus</h2>
                <ul>
                    <li className='About-item'>+595 981356739</li>
                    <li className='About-item'>dtf.ruben.troche@gmail.com</li>
                    <li className='About-item'>Asunción - Paraguay</li>
                    <li className='About-item'>{phone}</li>
                    <li className='About-item'>{email}</li>
                    <li className='About-item'>{website}</li>
                    <li className='About-item'>{address}</li>
                </ul>
            </article>
        );
    };
export default About;