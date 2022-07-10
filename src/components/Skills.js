import React from 'react';

const Skills = () => {

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
                <Skill percentage={90} color="darkcyan" skill="Python"/>
                <Skill percentage={50} color="cornflowerblue" skill="Go"/>
                <Skill percentage={60} color="goldenrod" skill="JavaScript"/>
                <Skill percentage={70} color="limegreen" skill="Django"/>
            </ul>
        </section>
    )
}

export default Skills;