import React from 'react';
import '../styles/components/Items.styl'

const Experience = (props) => {

    const {
        items = new Array(3).fill('No experience yet')
    } = props;

    return (
        <section className='Experience'>
            <h2 className='Experience-title'>Experience</h2>
            <div className='Experience-items'>
                {items.map((item,index) => (
                    <div key={`experience-item-${index}`} className='Experience-item'>
                        <h4 className='job-title'>{item.jobTitle}</h4>
                        <p className='job-company'>{item.company}</p>
                        <p className='job-dates'>{`${item.startDate} - ${item.endDate}`}</p>
                        <p className='job-descr'>{item.jobDescription}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Experience;