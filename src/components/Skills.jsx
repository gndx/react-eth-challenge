import React, { useState, useEffect } from 'react';
import getData from '../utils/getData';

function Skills() {
    const [data, setData] = useState({ skills: [] });

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

    const { skills } = data;

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
