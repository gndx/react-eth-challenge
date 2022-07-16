import React from 'react';

export const About = ({social}) => {
    return (
        <section className="about-section">
            <h2 className="About-title">
                More About Me
            </h2>
            <div>
                <ul>
                    {
                        social?.map((socialNet, index) => (
                            <li key={index} className="Skills-item" >
                                {socialNet.name} - {socialNet.url}
                            </li>
                        ))
                    }
                </ul>
            </div>
        </section>
    );
}
