import React from 'react';

function Experience({ data }) {
    let dataFromParent = data;
    if (typeof dataFromParent === 'undefined' || typeof dataFromParent.name === 'undefined') {
        dataFromParent = { experience: [] };
    }
    const { experience } = dataFromParent;
    let keyCounter = 0;
    return (
        <div className='Experience-box'>
            <div className='Experience-title'>Experiencia</div>
            <div className='grid-container-2-col-order-col'>
                {experience.map((item) => (
                    <div key={++keyCounter} className='Experience-item'>
                        <div className='Experience-item-job-title'>{item.jobTitle}</div>
                        <div className='Experience-item-company'>{item.company}</div>
                        <div className='Experience-item-job-description'>{item.jobDescription}</div>
                        <div className='Experience-item-start-date'>{item.startDate}</div>
                        <div className='Experience-item-end-date'>{item.endDate}</div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Experience;
