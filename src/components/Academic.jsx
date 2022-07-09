import React from "react";
class Academic extends React.Component {
    constructor(props){
      super(props)

      this.state = {academic : props.academic || 
        [
          {degree: "Master", institution: "MIT", description: "Some description" },
          {degree: "Engineering", institution: "MIT", description: "Some description" },
          {degree: "Sci-Fi", institution: "MIT", description: "Some description" },
        ]
      }
    }

    render() {
      return (
        <div className="hero is-white has-equal-height">
          <div className="hero-body content">
            <p className="title Academic-title">Estudios</p>
            <ul>
              {
                this.state.academic.map((data, k) => 
                  <li className="Academic-item" key={k}>
                    <p className="has-text-weight-bold">{data.degree} <code>{data.institution}</code></p>
                    {data.description}
                  </li>
                )
              }
            </ul>
          </div>
        </div>
      )
    }
  }

export default Academic;