import React from 'react';
import '../styles/components/Item.styl';

function Skills({
    skills = Array(3).fill({
        name: '',
        percentage: '',
    }),}){
    const listItems = skills.map((item) =>
        <li key={item.name+item.percentage} className="Skills-item">
            <h5>{item.name} - {item.percentage} </h5>
        </li>);
    return (
        <skills>
            <div className="Item-title Skills-title">
                <p>Skills</p>
            </div>
            <div className="Item-content Skills-desc">
                <ul>{listItems}</ul>
            </div>
        </skills>
    );
}

export default Skills;