import React from 'react';
import "./Experience.scss";
import ExperienceItem from './ExperienceItem/ExperienceItem';
import getData from '../../utils/getData';

const Experience = () => {

    const [ experience, setExperience ] = React.useState([]);

    React.useEffect(() => {
        getData("http://localhost:3000/data").then(res => setExperience(res.experience))
    }, [])

    return (
        <section className='Experience'>
            <h2 className='Experience-title'>Professional experience</h2>
            <ol>
                { experience.length > 0 ? 
                
                    experience.map(exp => 
                    
                        <ExperienceItem  
                            key={exp.company}
                            className="Experience-item"
                            position={exp.position}
                            company={exp.company}
                            companyUrl={exp.url}
                            date={exp.date}
                            description={exp.jobDescription}
                        />) :

                        <React.Fragment>
                            s<li className="Experience-item"></li>
                            <li className="Experience-item"></li>
                            <li className="Experience-item"></li>
                        </React.Fragment>
            
                }
         
            </ol>
        </section>
    );
}

export default Experience;