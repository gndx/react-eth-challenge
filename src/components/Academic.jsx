import React from "react";
class Academic extends React.Component {
    constructor(props){
      super(props)

      this.state = {academic : props.academic || Array(3).fill({})
      }
    }

    render() {
      return (
        <div className="hero">
          <div className="hero-body content">
            <p className="Academic-title title is-size-4 is-uppercase not-margin">Estudios</p>
            <hr/>
            <ul>
              {
                this.state.academic.map((data, k) => 
                  <li className="Academic-item" key={k}>
                    <p className="is-size-5 title">{data.degree} <span className="has-text-weight-normal">in {data.institution}</span></p>
                    <p className="is-size-5 subtitle">{data.description}</p>
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