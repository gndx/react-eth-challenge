import React from 'react';
import '../styles/components/Percentages.styl'

const Languages = (props) => {

    const {
        items = new Array(3).fill('No languages submitted')
    } = props;

    return (
        <section>
            <h2 className='Languages-title'>Languages</h2>
            {items.map((item, index) => (
                <div className='language-container' key={`language-item-${index}`}>
                    <div className='language-fill' style={{width:item.percentage}}></div>
                    <p className='Languages-item'>{item.name}</p>
                    <p>{item.percentage}</p>
                </div>
            ))}
        </section>
    );
};

export default Languages;