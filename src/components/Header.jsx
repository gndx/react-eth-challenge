import React, { Component } from "react";

class Header extends Component {
    constructor(props){
      super(props)

      this.state = {
        Avatar: props.Avatar || '',
        Name: props.Name || '',
        Profession: props.Profession || '',
        Address: props.Address || '', 
      }
    }
    render() {     
      return (
        <div className="columns has-background-info is-header">
          <div className="column is-2 is-offset-2">
            <figure className="image is-1by1">
              <img className="is-rounded" src={this.state.Avatar} alt="Avatar" />
            </figure>
          </div>          
          <div className="column is-half is-offset-1 Header-title">
              <p className="is-size-3 has-text-weight-medium">{this.state.Name}</p>
              <p className="is-size-4">{this.state.Profession}</p>    
              <p className="is-size-5">{this.state.Address}</p>    
              {this.props.children}
          </div>
        </div>
      )
    }
  }

export default Header;