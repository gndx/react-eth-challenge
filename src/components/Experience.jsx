import React from 'react'

const Experience = ({ data = {} }) => {
    return (
        <div className='Experience-container container'>
            <div className='row'>
                <h2 className='Experience-title'>Experience</h2>
                {data.experience.map((experience) => (
                    <div className='Experience-item col-4' key={experience.company}>
                        <h5>{experience.company}</h5>
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
