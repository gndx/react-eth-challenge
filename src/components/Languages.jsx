import React from "react";
class Languages extends React.Component {
    constructor(props){
      super(props)

      this.state = {languages : props.languages || Array(3).fill({})
      }
    }

    render() {          
      return (
        <>
          <p className="Languages-title title is-size-4 is-uppercase not-margin">Idiomas</p>
          <hr/>
          <div className="About-title">      
              {            
                this.state.languages.map((langs, k)=> 
                <div className="Languages-item mb-2" key={k}>
                  <p className="has-text-weight-bold">{langs.name}
                    <span className="is-pulled-right has-text-weight-light">{langs.percentage}%</span>
                  </p>
                  <progress className="progress is-info" value={langs.percentage} max="100">{langs.percentage}%</progress>
                </div>)             
              }
          </div>
        </>
      )
    }
  }

export default Languages;