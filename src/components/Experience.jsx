import React, { useState, useEffect } from 'react';
import getData from '../utils/getData';
 
const Experience = () => {
    const [data, setData] = useState({experience: []});

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

    const {experience} = data;

// console.log('>>--> Data:');
// console.log(data);

// console.log('>>--> Experience:');
// console.log(experience);

    let keyCounter = 0;
    return (
        <div>
            <div className="Experience-title">Experiencia</div>
            <div>{experience.map( (item) => (
                    <div key={++keyCounter} className="Experience-item">
                        <div className="Experience-item-job-title">{item.jobTitle}</div>
                        <div className="Experience-item-company">{item.company}</div>
                        <div className="Experience-item-job-description">{item.jobDescription}</div>
                        <div className="Experience-item-start-date">{item.startDate}</div>
                        <div className="Experience-item-end-date">{item.endDate}</div>
                    </div>
                )
            )}
            </div>
        </div>
    );
};
 
export default Experience;