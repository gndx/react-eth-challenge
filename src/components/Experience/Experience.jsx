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
                            className="Experience-item"
                            position={exp.position}
                            company={exp.company}
                            companyUrl={exp.companyUrl}
                            date="November 2021 - Now"
                            description={exp.jobDescription}
                        />) : "" }
                    
                <ExperienceItem 
                    className="Experience-item"
                    position="Wordpress web developer"
                    company="Brooklyn Chile"
                    companyUrl="https://brooklynchile.cl"
                    date="November 2021 - Now"
                    description="My achievements within the agency have focused on improving the agency's website, both in design, code, and performance. Currently, my
                    main function is to create different web products for agency clients."
                />
                <ExperienceItem 
                    className="Experience-item"
                    position="Webmaster"
                    company="4qui"
                    companyUrl="https://www.linkedin.com/company/4qui/about/"
                    date="April 2021 - November 2021"
                    description="My achievements within the agency have focused on improving the agency's website, both in design, code, and performance. Currently, my
                    main function is to create different web products for agency clients."
                />
                <ExperienceItem 
                    className="Experience-item"
                    position="Shopify web developer"
                    company="El Chollo España"
                    companyUrl="https://www.instagram.com/elchollo.es/"
                    date="June 2020 - February 2021"
                    description="An online store was created through the Shopify platform using the “Drop-shipping” sales model. This same store, together with conversion campaigns in Facebook ADS and the Facebook Pixel, managed to obtain a ROAS (return on advertising investment) greater than 5."
                />
            </ol>
        </section>
    );
}

export default Experience;