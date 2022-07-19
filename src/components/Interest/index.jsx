import React from 'react';

export const Interest = ({interests}) => {
    return (
        <section className="interest-section">
            <h2 className="Interest-title">Interest</h2>
            <div>
                <ul>
                    {
                        interests?.map((interest, index) => (
                            <li key={index} className="Interest-item">
                                {interest}
                            </li>
                        ))
                    }
                </ul>
            </div>
        </section>
    );
}
