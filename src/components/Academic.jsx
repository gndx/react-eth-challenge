import React from 'react';
import '../styles/components/App.styl'

const Academic = (data) => {

    const {
        items = new Array(3).fill('EMPTY')
    } = data;

    return (
        <section className='Academic'>
            <h2 className="Academic-title">Academic</h2>
            <div className="Academic-item">
                {items.map((item, index) => (
                    <div key={`academic-item-${index}`} className='Academic-item'>
                        <h3>{item.institution}</h3>
                        <p>{item.degree}</p>
                        <p>{item.description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Academic;