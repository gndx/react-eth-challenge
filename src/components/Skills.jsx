import React from 'react'
import Container from '../styles/components/Container';

const Skills = ({ skills }) => {
    return (
        <Container>
            <h3 className='h2 title Skills-title'>Skills</h3>
            <div className='container-columns-text-exp'>
                {
                    skills ?
                        skills.map((skill, index) => {
                            return (
                                <li key={index} className='Skills-item'>
                                    <h5 className='skill-name fw-semibold'>{skill.name}</h5>
                                    <p className='skill-percentage'>{skill.percentage}</p>

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

export default Skills