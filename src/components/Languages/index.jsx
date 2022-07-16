import React from 'react';

export const Languages = ({languages}) => {
    return (
        <section className="language-section">
            <h2 className="Languages-title">titulo lenguaje</h2>
            <div>
                <ul>
                    {
                        languages?.map((language, index) => (
                            <li key={index} className="Languages-item">
                                <h3>{language.name}: <span>{language.percentage}</span></h3>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </section>
    );
}
