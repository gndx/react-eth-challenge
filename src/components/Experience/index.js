import React from "react"
import '../../styles/components/Experience.css'

const Experience = (props) => {
    return (
        <section className='Experience'>
            <h1 className='Experience-title'>Experience</h1>
            <div className='Experience-items'>
                {props.data?.experience.map((experience) => (
                    <div className='Experience-item' key={experience.company}>
                        <h3>{experience.company}</h3>
                        <h4>{experience.jobTitle}</h4>
                        <p>
                        {experience.startDate}{' - '}{experience.endDate}
                        </p>
                        <p>{experience.jobDescription}</p>
                    </div>
                ))}
            </div>
      </section>
    )
}

export default Experience