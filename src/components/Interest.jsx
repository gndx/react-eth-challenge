import React from 'react'
import styled from 'styled-components';
import Container from '../styles/Container';

const Interest = ({ interests }) => {
    return (
        <Container>
            <h3 className='h2 title Interest-title'>Interests</h3>
            <div className='container-columns-text-exp'>
                {
                    interests ?
                        interests.map((interest, index) => {
                            return (
                                <li key={index} className='Interest-item'>
                                    {interest}
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

export default Interest