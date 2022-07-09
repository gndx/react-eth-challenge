import React from "react";
class About extends React.Component {
  constructor(props) {
    super(props)

      this.state = { social : props.social || 
        [
          {"name": "facebook", "url": "https://facebook.com/"},
          {"name": "twitter", "url": "https://twitter.com/"},
          {"name": "github","url": "https://github.com/"},
          {"name": "linkedin","url": "https://www.linkedin.com/"}
        ]
      }
    }
    render() {
      return (
        <nav className="level is-mobile">
          <div className="level-left About-title">         
            {
              this.state.social.map((media, k) =>
              <a className="level-item About-item" href={media.url} key={k}>
                <span className="icon is-small">
                  <i className={"fa fa-"+ media.name}></i>&nbsp;                    
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
