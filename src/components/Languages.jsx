import React from 'react'
import Container from '../styles/components/Container';

const Languages = ({ languages }) => {
    return (
        <Container>
            <h3 className='h2 title '>Languages</h3>
            <div className='container-columns-text-exp'>
                {
                    languages ?
                        languages.map((language, index) => {
                            return (
                                <li key={index} className='Skills-item'>
                                    <h5 className='language-name fw-semibold'>{language.name}</h5>
                                    <p className='language-percentage'>{language.percentage}</p>

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

export default Languages