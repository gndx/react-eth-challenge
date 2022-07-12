import React from 'react';
import '../styles/components/App.styl'

const Experience = (data) => {

    const {
        items = new Array(3).fill('No experience yet')
    } = data;

    return (
        <section className='Experience'>
            <h2 className='Experience-title'>Experience</h2>
            <div>
                {items.map((item,index) => (
                    <div key={`experience-item-${index}`} className='Experience-item'>
                        <h4>{item.jobTitle}</h4>
                        <p>{item.company}</p>
                        <p>{`${item.startDate} - ${item.endDate}`}</p>
                        <p>{item.jobDescription}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Experience;