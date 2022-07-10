import React from 'react';

const Interest = (props) => {

    const {
        items = new Array(3).fill('No interests submitted')
    } = props;

    return (
        <section>
            <h2 className='Interest-title'>Interests</h2>
            {items.map((item, index) => (
                <p key={`interes-item-${index}`} className='Interest-item'>{item}</p>
            ))}
        </section>
    );
};

export default Interest;