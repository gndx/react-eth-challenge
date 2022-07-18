import React from 'react';

export const Experience = ({ experiences }) => {
    return (
        <section className="work-experience-section">
            <h2 className="Experience-title">Experience</h2>
            <div>
                <ul>
                    {
                        experiences?.map((experience, index) => (
                            <li key={index} className="Experience-item">
                                <p>
                                    <div><strong>{experience.company}</strong></div>
                                    <div><em>{experience.startDate} - {experience.endDate}</em></div>
                                    <div>{experience.jobTitle}</div>
                                    <div>{experience.jobDescription}</div>
                                </p>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </section>
    );
}
