import React from 'react';

const Languages = (props) => {

    const {
        items = new Array(3).fill('No languages submitted')
    } = props;

    return (
        <section>
            <h2 className='Languages-title'>Languages</h2>
            {items.map((item, index) => (
                <p key={`language-item-${index}`} className='Languages-item'></p>
            ))}
        </section>
    );
};

export default Languages;