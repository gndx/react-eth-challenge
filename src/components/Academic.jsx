import React, { useState, useEffect } from 'react';
import getData from '../utils/getData';
 
const Academic = () => {
    const [data, setData] = useState({Academic: []});

    useEffect(() => {
        (async function() {
            try {
                let result = await getData();
                setData(result.data);
            } catch(e) {
                console.error(e);
            }
        })();
    }, []);


    const {Academic} = data;

    let keyCounter = 0;
    return (
        <div>
            <div className="Academic-title">Estudios</div>
            <div>{Academic.map( (item) => (
                    <div key={++keyCounter} className="Academic-item">
                        <div className="Academic-item-degree">{item.degree}</div>
                        <div className="Academic-item-institution">{item.institution}</div>
                        <div className="Academic-item-end-date">{item.endDate}</div>
                        <div className="Academic-item-start-date">{item.startDate}</div>
                        <div className="Academic-item-description">{item.description}</div>
                    </div>
                )
            )}
            </div>
        </div>
    );
    };
 
export default Academic;