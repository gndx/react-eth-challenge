import React from 'react';
import "./Languages.scss";

const Languages = () => {
    return (
        <section className='Languages'>
            <h2 className='Languages-title'>Languages</h2>
            <ul>
                <li className='Languages-item'><strong>Spanish:</strong> Native</li>
                <li className='Languages-item'><strong>English:</strong> A2</li>
                <li className='Languages-item'><strong>Portuguese:</strong> A2</li>
            </ul>
        </section>
    );
}

export default Languages;