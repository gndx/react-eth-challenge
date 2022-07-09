import React, { useState, useEffect } from 'react';
import getData from '../utils/getData';

function Languages() {
    const [data, setData] = useState({ languages: [] });

    useEffect(() => {
        (async function () {
            try {
                const result = await getData();
                setData(result.data);
            } catch (e) {
                console.error(e);
            }
        })();
    }, []);

    const { languages } = data;

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
