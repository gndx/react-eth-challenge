import React from "react"
import ExperienceCard from "./ExperienceCard"

export default function Experience({exp = [{}, {}, {}]}){
  console.log(exp?.sort((a, b) => new Date(b.endDate) - new Date(a.endDate)))
  return (
    <section className="Experience">
      <div className="Experience-container">
        <h2 className="Experience-title">Experiencias laborales</h2>
        <ul>
          {exp?.sort((a, b) => new Date(b.endDate) - new Date(a.endDate))?.map((item, index) => (
            <li key={`${index}-${index}`} className="Experience-item">
              <ExperienceCard item={item}/>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
