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
                                <h3>{skill.name}: <span>{skill.percentage}</span></h3>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </section>
    );
}
