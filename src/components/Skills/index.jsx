import React from 'react';

export const Skills = ({ skills }) => {
    return (
        <section className="Skills skills-section">
            <h2 className="Skills-title">Skills</h2>
            <div>
                <ul>
                    {
                        skills?.map((skill, index) => (
                            <li key={index} className="Skills-item" >                               
                               <label htmlFor={skill.name}>{skill.name}: {skill.percentage}<span>%</span></label>
                               <progress id={skill.name} value={skill.percentage} min="0" max="100"> {skill.percentage}% </progress>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </section>
    );
}
