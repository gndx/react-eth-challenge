import React from 'react';

const experiences = [
    {"link": "http://www.goldenqs.com/", "title": "GoldenQS", "time": 2019, "description": "I created the whole Front-End inspirated by a previous design made by the client and the Back-End in Wordpress and PHP"},
    {"link": "https://ariatel.com.co/", "title": "Ariatel", "time": 2020, "description": "I have worked the last two years as a Full-Stack Developer using technologies like Python, Golang and React"},
    {"link": "https://www.m-o-t.com/", "title": "MOT", "time": 2022, "description": "I have made some features and the initial layout of the website (Only Front-End and PHP components)"}
];

const Experience = () => {

    const ExperienceItem = ({title, time, description, link}) => {
    
        return (
            <article className="Experience-item">
                <h3><a href={link} rel="nofollow" target="_blank">{title}</a></h3>
                <small><i>{time}</i></small>
                <p>
                    {description}
                </p>
            </article>
        )
    }    

    return (
        <section>
            <h3 className="Experience-title">
                My Experience
            </h3>
            <div className='Experience-info'>
                {experiences.map(el => <ExperienceItem key={el.title} {...el}/>)}
            </div>
        </section>
    )
}

export default Experience;