import React from 'react';

export const Skills = ({items = []}) => (
    <seccion class="Skills">
        <p className='Skills-title'>Skills</p>
        <ul className='Skills-list'>     {items.map( ({name, percentage}, index) => (
            <li className='Skills-item' key={String(index)}>{name} <b>{percentage}</b></li>
            ))}
        </ul>
    </seccion>
)

export default  Skills;