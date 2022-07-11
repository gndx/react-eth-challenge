import React from "react";
class Experience extends React.Component {
    constructor(props){
      super(props)

      this.state = {exp : props.exp || Array(3).fill({})}
    }

    render() {
      return (
        <div className="hero is-small">
            <div className="hero-body content">
              <p className="Experience-title title is-size-4 is-uppercase not-margin">Experiencia Laboral</p>
              <hr/>
              <ul>
              {
                this.state.exp.map((experience, k) =>
                  <li className="Experience-item" key={k}>
                    <p className="is-size-5 title">
                      {experience.company} <code>{experience.jobTitle}</code><br/>
                      <span className="is-size-6 is-italic">{experience.startDate}- {experience.endDate}</span>                      
                    </p>
                    <p className="is-size-5 subtitle">{experience.jobDescription}</p>     
                  </li>                  
                )
              }
              </ul>
            </div>
        </div>
      )
    }
  }

export default Experience;