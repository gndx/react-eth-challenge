import React from 'react';

const Languages = () => {

    const Language = ({percentage, color, language}) => {
        return (
            <li className="Languages-item">
                <h3>{language} ({percentage}%)</h3>
                <div>
                    <div style={{width: `${percentage}%`, background: color}}></div>
                </div>
            </li>
        )
    }

    return (
        <section className='semi-section'>
            <h3 className="Languages-title">
                Languages
            </h3>
            <ul className='Languages-list'>
                <Language percentage={100} color="palevioletred" language="Spanish (native)"/>
                <Language percentage={60} color="mediumslateblue" language="English"/>
                <Language percentage={1} color="darkslategray" language="Machine code"/>
            </ul>
        </section>
    )
}

export default Languages;