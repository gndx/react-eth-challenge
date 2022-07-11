import React from 'react';
import "./Experience.scss";
import ExperienceItem from './ExperienceItem/ExperienceItem';
import { AppContext } from '../AppContext';

const Experience = () => {

    const { data } = React.useContext(AppContext);

    const { experience } = data;

    return (
        <section className='Experience'>
            <h2 className='Experience-title'>Professional experience</h2>
            <ol>
                { experience ? 
                    experience.map(exp => 
                    
                        <ExperienceItem  
                            key={exp.company}
                            className="Experience-item"
                            position={exp.position}
                            company={exp.company}
                            companyUrl={exp.companyUrl}
                            date={exp.date}
                            description={exp.jobDescription}
                        />) : "" }
            </ol>
        </section>
    );
}

export default Experience;