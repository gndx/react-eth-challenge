import React from 'react';

function Academic({ data }) {
    let dataFromParent = data;
    if (typeof dataFromParent === 'undefined' || typeof dataFromParent.name === 'undefined') {
        dataFromParent = { Academic: [] };
    }
    const { Academic } = dataFromParent;
    let keyCounter = 0;
    return (
        <div className='Academic-box'>
            <div className='Academic-title'>Estudios</div>
            <div>
                {Academic.map((item) => (
                    <div key={++keyCounter} className='Academic-item'>
                        <div className='Academic-item-degree'>{item.degree}</div>
                        <div className='Academic-item-institution'>{item.institution}</div>
                        <div className='Academic-item-start-date'>{item.startDate}</div>
                        <div className='Academic-item-end-date'>{item.endDate}</div>
                        <div className='Academic-item-description'>{item.description}</div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Academic;
