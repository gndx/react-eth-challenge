import React from "react";
class Skills extends React.Component {
    constructor(props){
      super(props)

      this.state = {  skills: props.skills || Array(3).fill({}) }
    }
    
    render() {
      
      return (
        <>
          <p className="Skills-title title is-size-4 is-uppercase not-margin">Habilidades</p>
          <hr/>
          {
            this.state.skills.map((skill, k) => 
              <div className="Skills-item mb-2" key={k}>
                <p className="has-text-weight-bold">{skill.name}
                  <span className="is-pulled-right has-text-weight-light">{skill.percentage}%</span>
                </p>                  
                <progress className="progress is-success" value={skill.percentage} max="100">{skill.percentage}%</progress>
              </div>
            )
          }
        </>
      )
    }
  }

export default Skills;
