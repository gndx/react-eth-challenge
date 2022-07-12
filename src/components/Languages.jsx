import React from 'react';
import '../styles/components/Item.styl';

function Languages({
    languages = Array(3).fill({
        name: '',
        percentage: '',
    }),}){
    const listItems = languages.map((item) =>
        <li key={item.name+item.percentage} className="Languages-item">
            {item.name} - {item.percentage}
        </li>);
    return (
        <languages>
            <div className="Item-title Languages-title">
                <p>Languages</p>
            </div>
            <div className="Item-content Languages-desc">
                <ul>{listItems}</ul>
            </div>
        </languages>
    );
}

export default Languages;