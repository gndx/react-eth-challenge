import React from 'react'
import styled from 'styled-components';
import Container from '../styles/Container';

const Academic = ({ academic }) => {
    return (
        <Container>
            <h3 className='h2 title Academic-title'>Academic</h3>
            <div className='container-columns-text-exp'>
                {
                    academic ?
                        academic.map((degree, index) => {
                            return (
                                <li key={index} className='Academic-item'>
                                    <h5 className='degree-title fw-semibold'>{degree.degree}</h5>
                                    <p className='degree-company'>{degree.institution}</p>
                                    <p className='degree-date'>{degree.startDate} - {degree.endDate}</p>
                                    <p className='degree-desc'>{degree.description}</p>
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

export default Academic