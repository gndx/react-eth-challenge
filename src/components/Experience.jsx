import React from 'react';
import Container from '../styles/components/Container';

const Experience = ({experience = [{}, {}, {}]}) => {
    return (
        <Container >
            <h3 className='title Experience-title'>Work Experience</h3>
            {
                experience ?
                    experience.map((job, index) => {
                        return (
                            <li key={index} className='Experience-item container-content'>
                                <div className='content-date'>
                                    <p className='job-date'>{job.startDate} - {job.endDate}</p>
                                </div>
                                <div className='content-desc'>
                                    <h5 className='job-title'>{job.jobTitle}</h5>
                                    <p className='job-company'>{job.company}</p>
                                    <p className='job-desc'>{job.jobDescription}</p>
                                </div>
                            </li>
                        )
                    })
                    :
                    <p>Loading...</p>
            }
        </Container>
    )
}

export default Experience;