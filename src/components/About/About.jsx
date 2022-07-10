import React from 'react';
import "./About.scss";
import AboutItem from "./AboutItem/AboutItem";

const About = () => {
    return (
        <section className='About'>
            <h2 className="About-title">About my projects</h2>
            <ol>
                <AboutItem 
                    className="About-item"
                    project="DecoderMors"
                    projectUrl="https://leandergs.github.io/decoder-mors/"
                    description="Web application for Morse code decoding and encryption."
                    technologies={["React.js", "Sass", "Webpack"]}
                />
                <AboutItem 
                    className="About-item"
                    project="React expense control app"
                    projectUrl="https://leandergs.github.io/React-expense-control-app/"
                    description="Web application to control monetary expenses."
                    technologies={["React.js", "Sass"]}
                />
                <AboutItem 
                    className="About-item"
                    project="Your weight in other planet"
                    projectUrl="https://leandergs.github.io/Website-your_weight_in_other_planet/"
                    description="Website that allows you to know your weight on the planets of the solar system +1 secret."
                    technologies={["JavaScript", "Sass"]}
                />
            </ol>
        </section>
    )
}

export default About;