import React from 'react';

export const Languages = ({items = []}) => (
    <seccion class="Languages">
        <p className='Languages-title'>Languages</p>
        <ul className='Languages-list'>
            {items.map( ({name, percentage}, index) => (
            <li className='Languages-item' key={String(index)}>{name} <b>{percentage}</b></li>
            ))}
        </ul>
    </seccion>
)

export default  Languages;