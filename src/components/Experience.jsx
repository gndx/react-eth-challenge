import React from 'react';

export const Experience = ({items = []}) => (
    <seccion class="Experience">
        <p className='Experience-title'>Experience</p>
        <ul className='Experience-list'>
            {items.map((item, index) => (
                <li className='Experience-item' key={String(index)}><b>{item.startDate} - {item.endDate}</b> {item.company} ({item.jobTitle}) <p>{item.jobDescription}</p><br/></li>
            ))}
        </ul>
    </seccion>
)

export default  Experience;