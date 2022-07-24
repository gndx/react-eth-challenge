import React from 'react';
import "./AboutItem.scss";

const AboutItem = ({
    className,
    project,
    projectUrl,
    description,
    technologies
}) => {
    
    return (
        <li className={className}>
            <h3><a href={projectUrl} target="_blank" title={project}>{project}</a></h3>
            <p>{description}</p>
            <ul>Main technologies
                {technologies.map(technology => <li key={technology} >{technology}</li>)}
            </ul>
        </li>
    );
}

export default AboutItem;