import React, { useState, useEffect } from 'react';
import getData from '../utils/getData';

function Interest() {
    const [data, setData] = useState({ interest: [] });

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

    const { interest } = data;

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
