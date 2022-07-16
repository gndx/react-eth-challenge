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
                                <h4>{experience.company}</h4>
                                <h5>{experience.startDate} - {experience.endDate}</h5>
                                <h4>{experience.jobTitle}</h4>
                                <h4>{experience.jobDescription}</h4>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </section>
    );
}
