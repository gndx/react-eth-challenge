import React from 'react';

export const Academic = ({items = []}) => (
    <seccion class="Academic">
        <p className='Academic-title'>Academic</p>
        <ul className='Academic-list'>
            {items.map((item, index) => (
                <li className='Academic-item' key={String(index)}><b>{item.startDate} - {item.endDate}</b> {item.institution} ({item.degree}) <p>{item.description}</p><br/></li>
            ))}
        </ul>

    </seccion>
)

export default  Academic;