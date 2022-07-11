import React from 'react';
import "./About.scss";
import AboutItem from "./AboutItem/AboutItem";
import { AppContext } from "../AppContext"

const About = () => {

    const { data } = React.useContext(AppContext);

    const { projects } = data;

    return (
        <section className='About'>
            <h2 className="About-title">About my projects</h2>
            <ol>
                { projects ? projects.map(project => 
                
                    <AboutItem 
                        className="About-item"
                        key={project.name}
                        project={project.name}
                        projectUrl={project.url}
                        description={project.description}
                        technologies={project.technologies.map(tech => tech)}
                    /> ) : "" }
            </ol>
        </section>
    )
}

export default About;