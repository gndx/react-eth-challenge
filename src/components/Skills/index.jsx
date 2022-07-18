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
                               {skill.name}: {skill.percentage}<span>%</span>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </section>
    );
}
