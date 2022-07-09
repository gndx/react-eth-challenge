import React from 'react';

const Skills = (props) => {

    const {
        items = new Array(3).fill('No skills yet')
    } = props;

    return (
        <section>
            <h2 className='Skills-title'>Skills</h2>
            {items.map((item,index) => (
                <p key={`skill-item-${index}`} className='Skills-item'></p>
            ))}
        </section>
    );
};

export default Skills;