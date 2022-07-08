import React, { useState, useEffect } from 'react';
import getData from '../utils/getData';
 
const Languages = () => {
    const [data, setData] = useState({languages: []});

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

    const {languages} = data;

    let keyCounter = 0;
    return (
        <div>
            <div className="Languages-title">Idiomas</div>
            <div>{languages.map( (item) => (
                    <div key={++keyCounter} className="Languages-item">
                        <div className="Languages-item-name">{item.name}</div>
                        <div className="Languages-item-percentage">{item.percentage}</div>
                    </div>
                )
            )}
            </div>
        </div>
    );
};
 
export default Languages;