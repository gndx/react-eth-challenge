import React from 'react'
import styled from 'styled-components';
import Container from '../styles/Container';

const Experience = ({ experience }) => {
    return (
        <Container >
            <h3 className='h2 title Experience-title'>Experience</h3>
            <div className='container-columns-text'>
                {
                    experience ?
                        experience.map((job, index) => {
                            return (
                                <li key={index} className='Experience-item'>
                                    <h5 className='job-title fw-semibold'>{job.jobTitle}</h5>
                                    <p className='job-company'>{job.company}</p>
                                    <p className='job-date'>{job.startDate} - {job.endDate}</p>
                                    <p className='job-desc'>{job.jobDescription}</p>
                                </li>
                            )
                        })
                        :
                        <p>Loading...</p>
                }
            </div>
        </Container>
    )
}

export default Experience