import React from 'react';
import '../styles/components/Items.styl'

const Certificates = (props) => {
    const {
        items = new Array(3).fill('No academic title yet')
    } = props;

    return (
        <section className='Certificates'>
            <h2 className='Certificate-title'>Certificates</h2>
            <div className='Certificate-items'>
                {items.map((item, index) => (
                    <div key={`certificate-item-${index}`} className='Certificate-item'>
                        <h4 className='certificate-name'>{item.name}</h4>
                        <p className='certificate-institution'>{item.institution}</p>
                        <p className='certificate-date'>{item.date}</p>
                        <p className='certificate-descr'>{item.description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Certificates;