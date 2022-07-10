import React from 'react';

const Skills = () => {

    const Skill = ({percentage, color, skill}) => {

        return (
            <li className="Skills-item">
                <h3>{skill}</h3>
                <div>
                    <div style={{width: `${percentage}%`, color: color}}></div>
                </div>
            </li>
        )
    }

    return (
        <section>
            <h3 className="Skills-title">
                My Skills
            </h3>
            <ul>
                <Skill percentage={90} color="green" skill="Python"/>
                <Skill percentage={50} color="blue" skill="Go"/>
                <Skill percentage={60} color="yellow" skill="JavaScript"/>
                <Skill percentage={70} color="darkgreen" skill="Django"/>
            </ul>
        </section>
    )
}

export default Skills;