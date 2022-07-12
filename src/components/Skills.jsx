import React from 'react';
import '../styles/components/App.styl'

const Skills = (props) => {

    const {
        items = new Array(3).fill('EMPTY')
    } = props;

    return (
        <section>
            <h2 className='Skills-title'>Skills</h2>
            {items.map((item,index) => (
                <div key={`skill-item-${index}`}>
                    <p className='Skills-item'>{item.name}</p>
                    <p>{item.percentage}</p>
                </div>
            ))}
        </section>
    );
};

export default Skills;