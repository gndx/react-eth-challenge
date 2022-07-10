import React, { useContext } from 'react';
import { Context } from '../containers/App';

const Skills = () => {

    const data = useContext(Context);

    const Skill = ({percentage, color, skill}) => {

        return (
            <li className="Skills-item">
                <h3>{skill} ({percentage}%)</h3>
                <div>
                    <div style={{width: `${percentage}%`, background: color}}></div>
                </div>
            </li>
        )
    }

    return (
        <section className='semi-section'>
            <h3 className="Skills-title">
                My Skills
            </h3>
            <ul className='Skills-list'>
                {
                    data.skills !== undefined ? 
                        data.skills.map((skill, i) => <Skill key={`${i}--skill`} {...skill}/>) 
                        : null
                }
            </ul>
        </section>
    )
}

export default Skills;