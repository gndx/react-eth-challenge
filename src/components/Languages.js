import React, { useContext } from 'react';
import { Context } from '../containers/App';

const Languages = () => {

    const data = useContext(Context);

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
                {
                    data.languages !== undefined ? 
                        data.languages.map((lang, i) => <Language key={`${i}--lang`} {...lang}/>) 
                        : null
                }
            </ul>
        </section>
    )
}

export default Languages;