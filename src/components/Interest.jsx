import React, { useState, useEffect } from 'react';
import getData from '../utils/getData';
 
const Interest = () => {
    const [data, setData] = useState({interest: []});

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

    const {interest} = data;

    let keyCounter = 0;
    return (
        <div>
            <div className="Interest-title">{name}</div>
            <div>{interest.map( (item) => (
                    <div key={++keyCounter} className="Interest-item">
                        <div className="Interest-item-name">{item}</div>
                    </div>
                )
            )}
            </div>
        </div>
    );
};
 
export default Interest;