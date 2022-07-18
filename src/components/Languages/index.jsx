import React from 'react';

export const Languages = ({languages}) => {
    return (
        <section className="language-section">
            <h2 className="Languages-title">Languages</h2>
            <div>
                <ul>
                    {
                        languages?.map((language, index) => (
                            <li key={index} className="Languages-item">
                                {language.name}: {language.percentage}<span>%</span>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </section>
    );
}
