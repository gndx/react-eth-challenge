import React from 'react'
import '../styles/components/About.styl'

const About = ({data}) => {
  return (
    <div className="About-container">
      <h1 className="About-title">About</h1>
      <li className="About-list">
        {data.map((about,idx) => {
            return (
                <ul key={idx} className="About-item">
                  <h1>{about.name}</h1>
                  <span>{about.url}</span>
                </ul>
            )
        })}
      </li> 
    </div>
  );
}

export default About