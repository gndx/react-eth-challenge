import React from "react";
class Languages extends React.Component {
    constructor(props){
      super(props)

      this.state = {languages : props.languages || 
        [
          {name: 'Spanish ', percentage: '100%'},
          {name: 'English ', percentage: '90%'},
          {name: 'French ', percentage: '90%'},
        ]
      }
    }

    render() {          
      return (
        <>
          <p className="Languages-title title">Idiomas</p>
          <div className="About-title">      
              {            
                this.state.languages.map((langs, k)=> 
                <div className="Languages-item" key={k}>
                  <p className="has-text-weight-bold">{langs.name}
                    <span className="is-pulled-right has-text-weight-light">{langs.percentage}%</span>
                  </p>
                  <progress className={parseInt(langs.percentage) <= 50 ? "progress is-link": "progress is-success" } value={langs.percentage} max="100">{langs.percentage}%</progress>
                </div>)             
              }
          </div>
        </>
      )
    }
  }

export default Languages;