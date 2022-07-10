import React from 'react';

function Languages({ data }) {
    let dataFromParent = data;
    if (typeof dataFromParent === 'undefined' || typeof dataFromParent.name === 'undefined') {
        dataFromParent = { languages: [] };
    }
    const { languages } = dataFromParent;
    let keyCounter = 0;
    return (
        <div className='Languages-box'>
            <div className='Languages-title'>Idiomas</div>
            <div className='grid-container-3-col'>
                {languages.map((item) => (
                    <div key={++keyCounter} className='Languages-item'>
                        <div className='Languages-item-name'>{item.name}</div>
                        <div className='Languages-item-percentage'>{item.percentage}</div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Languages;
