import React from 'react';
import "./Skills.scss";

const Skills = () => {
    return (
        <section className='Skills'>
            <h2 className='Skills-title'>Skills</h2>
            <p>Software:</p>
            <ul>
                <li className='Skills-item'>HTML5</li>
                <li className='Skills-item'>CSS3</li>
                <li className='Skills-item'>Sass</li>
                <li className='Skills-item'>JavaScript</li>
                <li className='Skills-item'>TypeScript</li>
                <li className='Skills-item'>React.js</li>
                <li className='Skills-item'>Next.js</li>
                <li className='Skills-item'>Node.js</li>
                <li className='Skills-item'>Express.js</li>
                <li className='Skills-item'>MongoDB</li>
                <li className='Skills-item'>Webpack</li>
                <li className='Skills-item'>Figma</li>
            </ul>
        </section>
    );
}

export default Skills;