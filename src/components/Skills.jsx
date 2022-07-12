import React from 'react'
import Container from '../styles/components/Container'

const Skills = ({ skills = [{}, {}, {}] }) => {
    return (
        <Container>
            <h3 className='title Skills-title'>Skills</h3>
                {
                    skills ?
                        skills.map((skill, index) => {
                            let width = {'width': skill.percentage}

                            return (
                                <li key={index} className='Skills-item container-content'>
                                    <p className='skill-name'>{skill.name}</p>
                                    <div className="progress">
                                        <div className="progress-bar" role="progressbar" style={width} aria-valuenow={skill.percentage} aria-valuemin="0" aria-valuemax="100">{skill.percentage}</div>
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


export default Skills;