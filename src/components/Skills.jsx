import React from 'react';
import '../styles/components/Percentages.styl'

const Skills = (props) => {

    const {
        items = new Array(3).fill('No skills yet')
    } = props;

    return (
        <section>
            <h2 className='Skills-title'>Skills</h2>
            {items.map((item,index) => (
                <div className='skill-container' key={`skill-item-${index}`}>
                    <div className='skill-fill' style={{width:item.percentage}}></div>
                    <p className='Skills-item'>{item.name}</p>
                    <p className='percentage'>{item.percentage}</p>
                </div>
            ))}
        </section>
    );
};

export default Skills;