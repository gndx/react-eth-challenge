import React, { useContext } from 'react';
import { ProfileContext } from '../containers/App';

const Skills = () => {
    const data = useContext(ProfileContext);
    const { skills = [{}, {}, {}] } = data;
    return (
        <>
            <h3 className='Skills-title'>Skills</h3>
            <div className="Skills-content">
                {skills.map((exp, index) => (
                    <div className="Skills-item" key={index}>
                        <div className="Skills-item-title">
                            <h4>{exp.name}</h4>
                            <h5>{exp.percentage}</h5>
                        </div>
                    </div>
                ))}
            </div>
        </>
    )
};

export default Skills;
