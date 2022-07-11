import React from "react";
class About extends React.Component {
  constructor(props) {
    super(props)

      this.state = { social : props.social || Array(4).fill({}) }
    }
    render() {
      return (
        <nav className="level is-mobile">
          <div className="level-left About-title">         
            {
              this.state.social.map((media, k) =>
              <a className="level-item About-item has-text-white" href={media.url} key={k}>
                <span className="icon is-large">
                  <i className={"fa fa-2x fa-"+ media.name}></i>&nbsp;                    
                </span>
              </a>
              )            
            }         
          </div>
        </nav>
      )
    }
  }

export default About;
