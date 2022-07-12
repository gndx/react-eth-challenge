import React, { useContext } from 'react';
import { ProfileContext } from '../containers/App';

const Experience = () => {
    const data = useContext(ProfileContext);
    const { experience = [{}, {}, {}] } = data;
    return (
        <>
            <h3 className='Experience-title'>Experience</h3>
            <div className="Experience-content">
                {experience.map((exp, index) => (
                    <div className="Experience-item" key={index}>
                        <div className="Experience-item-title">
                            <h4>{exp.jobTitle}</h4>
                            <h5>{exp.startDate} - {exp.endDate}</h5>
                            <h5>{exp.company}</h5>
                            <p>{exp.jobDescription}</p>
                        </div>
                    </div>
                ))}
            </div>
        </>
    )
};

export default Experience;
