import React from 'react';
import '../styles/components/Item.styl';

function Academic({
    academic = Array(3).fill({
        degree: '',
        description: '',
        endDate: '',
        institution: '',
        startDate: '',
    }),}){
    const listItems = academic.map((item) =>
        <li key={item.degree+item.endDate} className="Academic-item">
            {item.degree} - {item.institution}
            <div>{item.endDate}</div>
        </li>);
    return (
        <academic>
            <div className="Item-title Academic-title">
                <p>Academic</p>
            </div>
            <div className="Item-content Academic-desc">
                <ul>{listItems}</ul>
            </div>
        </academic>
    );
}

export default Academic;