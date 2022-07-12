import React, { useContext } from 'react';
import { ProfileContext } from '../containers/App';
import '../styles/components/Skills.styl';

const Skills = () => {
    const data = useContext(ProfileContext);
    const { skills = [{}, {}, {}] } = data;
    return (
        <>
            <section className="Skills">
                <h3 className='Skills-title'>Skills</h3>
                <div className="Skills-content">
                    {skills.map((exp, index) => (
                        <div className="Skills-item" key={index}>
                            <h4>{exp.name}</h4>
                            <h5>{exp.percentage}</h5>
                        </div>
                    ))}
                </div>
            </section>
        </>
    )
};

export default Skills;
