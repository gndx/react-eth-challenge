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
                            <li key={index} className="About-item" >
                                <a href={socialNet.url}>
                                    <img align="" src={socialNet.badge}></img>
                                </a>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </section>
    );
}
