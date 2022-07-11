import React from "react";
class Profile extends React.Component {

    constructor(props){
      super(props)

      this.state = { 
        profile: props.profile || '',
        Phone: props.Phone || '',
        Email: props.Email || '',
        WebSite: props.WebSite || ''     
      }
    }
    
    render() {
      return (
        <div className="hero">
          <div className="hero-body Profile-title">
            <div className="columns is-multiline Profile-desc">  
              <div className="column is-full has-text-centered">
                <p className="title is-size-4 is-uppercase not-margin">Sobre mí</p>
                <hr/>
              </div>
              <div className="column is-half content">                
                
                <blockquote className="subtitle is-size-5 is-italic">{this.state.profile}</blockquote>                
              </div>
              <div className="column is-half">
                  <p className="subtitle"> Email:&nbsp;
                    <a className="has-text-link" href={"mailto:"+ this.state.Email}>
                      <span className="icon is-small">
                        <i className="Header-email fa fa-envelope"></i>                 
                      </span>
                      &nbsp;{this.state.Email}
                    </a> 
                  </p>
                  <p className="subtitle"> Phone:&nbsp;
                    <a className="has-text-link" href={"tel:"+this.state.Phone}>
                      <span className="icon is-small">
                        <i className="Header-phone fa fa-phone"></i>                
                      </span>
                      &nbsp;{this.state.Phone}
                    </a>
                  </p>
                  <p className="subtitle"> Website:&nbsp;
                    <a className="has-text-link" href={this.state.WebSite}>
                      <span className="icon is-small">
                        <i className="Header-website fa fa-link"></i>         
                      </span>
                      &nbsp;{this.state.WebSite}
                    </a>
                  </p>
                  {this.props.children}
              </div>
            </div>
          </div>
        </div>        
      )
    }
  }

export default Profile;