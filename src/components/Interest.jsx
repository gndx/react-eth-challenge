import React from 'react';

export const Interest = ({items = []}) => (
    <seccion class="Interest">
        <p className='Interest-title'>Iterest</p>
        <ul className='Interest-list'>
            {items.map( (item, index) => (
                <li className='Interest-item' key={String(index)}>{item}</li>
            ))}
        </ul>
    </seccion>
)

export default  Interest;