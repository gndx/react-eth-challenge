import React from 'react';
import Container from '../styles/components/Container';

const Academic = ({ academic = [{}, {}, {}] }) => {
    return (
        <Container>
            <h3 className='title Academic-title'>Education</h3>
            {
                academic ?
                    academic.map((degree, index) => {
                        return (
                            <li key={index} className='Academic-item container-content'>
                                <div className='content-date'>
                                    <p className='degree-date'>{degree.startDate} - {degree.endDate}</p>
                                </div>
                                <div className='content-desc'>
                                    <h5 className='degree-title'>{degree.degree}</h5>
                                    <p className='degree-company'>{degree.institution}</p>
                                    <p className='degree-desc'>{degree.description}</p>
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

export default Academic;