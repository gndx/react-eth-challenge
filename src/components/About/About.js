import React from 'react';

function About(props) {
    return (
        <section className="about-section">
            <p className="About-title">
                {props.text}
            </p>
            <div>
                <ul>
                    <li className="About-item">About 1</li>
                    <li className="About-item">About 1</li>
                    <li className="About-item">About 1</li>
                </ul>
            </div>
        </section>
    );
}

export default About;