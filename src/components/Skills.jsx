import React from 'react';

function Skills({ data }) {
    let dataFromParent = data;
    if (typeof dataFromParent === 'undefined' || typeof dataFromParent.name === 'undefined') {
        dataFromParent = { skills: [] };
    }
    const { skills } = dataFromParent;
    let keyCounter = 0;
    return (
        <div className='Skills-box'>
            <div className='Skills-title'>Aptitudes</div>
            <div>
                {skills.map((item) => (
                    <div key={++keyCounter} className='Skills-item'>
                        <div className='Skills-item-name'>{item.name}</div>
                        <div className='Skills-item-percentage'>{item.percentage}</div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Skills;
