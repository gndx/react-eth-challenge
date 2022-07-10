import React from 'react';

const Languages = () => {

    const Language = ({percentage, color, language}) => {
        return (
            <li className="Skills-item">
                <h3>{language}</h3>
                <div>
                    <div style={{width: `${percentage}%`, color: color}}></div>
                </div>
            </li>
        )
    }

    return (
        <section>
            <h3 className="Languages-title">
                Languages
            </h3>
            <ul>
                <Language percentage={100} color="green" language="Spanish (native)"/>
                <Language percentage={60} color="blue" language="English"/>
                <Language percentage={1} color="yellow" language="Machine code"/>
            </ul>
        </section>
    )
}

export default Languages;