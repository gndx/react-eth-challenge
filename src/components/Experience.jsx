import React from 'react'

const Experience = ({ data = {} }) => {
    return (
        <div className='Experience-container container'>
            <div className='row'>
                <h2 className='Experience-title title'>Experience</h2>
                {data.experience.map((experience) => (
                    <div className='Experience-item col-12 col-md-4' key={experience.company}>
                        <h5 className='subtitle'>{experience.jobTitle}</h5>
                        <h6>{experience.company}</h6>
                        <p>{experience.endDate}</p>
                        <p>{experience.jobDescription}</p>
                        <p>{experience.startDate}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Experience
