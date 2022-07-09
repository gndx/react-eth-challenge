import React from 'react';

const Academic = (props) => {

    const {
        items = new Array(3).fill('No academic title yet')
    } = props;

    return (
        <section>
            <h2 className='Academic-title'>Education</h2>
            {items.map((item, index) => (
                <div key={`academic-item-${index}`} className='Academic-item'>
                    <h4 className='academic-institution'>{item.institution}</h4>
                    <p className='academic-degree'>{item.degree}</p>
                    <p className='academic-dates'>{`${item.startDate} - ${item.endDate}`}</p>
                    <p className='academic-descr'>{item.description}</p>
                </div>
            ))}
        </section>
    );
};

export default Academic;