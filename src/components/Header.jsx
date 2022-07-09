import React, { Component } from "react";

class Header extends Component {
    constructor(props){
      super(props)

      this.state = {
        Avatar: props.Avatar || '',
        Name: props.Name || '',
        Profession: props.Profession || '',
        Phone: props.Phone || '',
        Email: props.Email || '',
        WebSite: props.WebSite || '',
        Address: props.Address || '',
      }
    }
    render() {     
      return (
        <div className="box">
          <article className="media">
            <div className="media-left">
              <figure className="image is-128x128">
                <img className="is-rounded" src={this.state.Avatar} alt="Avatar" />
              </figure>
            </div>
            <div className="media-content">
              <div className="content Header-title">
                <p className="title is-size-5">{this.state.Name}</p>
                <p className="subtitle is-size-6">{this.state.Profession}</p>
                <p className="subtitle is-size-6">{this.state.Address}</p>  
              </div>
              <nav className="level is-mobile">
                <div className="level-left">
                  <a className="level-item" href={"tel:"+this.state.Phone}>
                    <span className="icon is-small">
                      <i className="Header-phone fa fa-phone"></i>&nbsp;                    
                    </span>
                    {this.state.Phone}
                  </a>
                  <a className="level-item" href={"mailto:"+ this.state.Email}>
                    <span className="icon is-small">
                      <i className="Header-email fa fa-envelope"></i>&nbsp;                   
                    </span>
                    {this.state.Email}
                  </a>
                  <a className="level-item" href={this.state.WebSite}>
                    <span className="icon is-small">
                      <i className="Header-website fa fa-link"></i>&nbsp;              
                    </span>
                    {this.state.WebSite}
                  </a>
                </div>
              </nav>
              {this.props.children}    
            </div>
          </article>
        </div>
      )
    }
  }

export default Header;