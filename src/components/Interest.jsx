import React from 'react';
import '../styles/components/Item.styl';

function Interest({
    interest = ['','','']}){
    const listItems = interest.map((item) =>
        <li key={item} className="Interest-item">
            {item}
        </li>);
    return (
        <interest>
            <div className="Item-title Interest-title">
                <p>Interest</p>
            </div>
            <div className="Item-content Interest-desc">
                <ul>{listItems}</ul>
            </div>
        </interest>
    );
}

export default Interest;