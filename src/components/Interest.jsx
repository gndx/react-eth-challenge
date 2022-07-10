import React from 'react';

function Interest({ data }) {
    let dataFromParent = data;
    if (typeof dataFromParent === 'undefined' || typeof dataFromParent.name === 'undefined') {
        dataFromParent = { interest: [] };
    }
    const { interest } = dataFromParent;
    let keyCounter = 0;
    return (
        <div className='Interest-box'>
            <div className='Interest-title'>Intereses</div>
            <div className='grid-container-2-col'>
                {interest.map((item) => (
                    <div key={++keyCounter} className='Interest-item'>
                        <div className='Interest-item-name'>{item}</div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Interest;
