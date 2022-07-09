import React from 'react';

const Certificates = (props) => {
    const {
        items = new Array(3).fill('No academic title yet')
    } = props;

    return (
        <section>
            <h2 className='Certificate-title'>Certificates</h2>
            {items.map((item, index) => (
                <div key={`certificate-item-${index}`} className='Certificate-item'>
                    <h4 className='certificate-name'>{item.name}</h4>
                    <p className='certificate-institution'>{item.institution}</p>
                    <p className='certificate-date'>{item.date}</p>
                    <p className='certificate-descr'>{item.description}</p>
                </div>
            ))}
        </section>
    );
};

export default Certificates;