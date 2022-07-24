import React from 'react';
import "./About.scss";
import AboutItem from "./AboutItem/AboutItem";
import getData from '../../utils/getData';

const About = () => {

    const [ projects, setProjects ] = React.useState([]);

    React.useEffect(() => {
        getData("https://raw.githubusercontent.com/LeanderGS/react-eth-challenge/main/data.json").then(res => setProjects(res.data.projects))
    }, [])

    return (
        <section className='About'>
            <h2 className="About-title">About my projects</h2>
            <ol>
                { projects.length > 0 ? projects.map(project => 
                
                    <AboutItem 
                        className="About-item"
                        key={project.name}
                        project={project.name}
                        projectUrl={project.url}
                        description={project.description}
                        technologies={project.technologies.map(tech => tech)}
                    /> ) : 
                    
                    <React.Fragment>
                        <li className="About-item"></li>
                        <li className="About-item"></li>
                        <li className="About-item"></li>
                    </React.Fragment>

                }
            </ol>
        </section>
    )
}

export default About;