import React from "react";
class Profile extends React.Component {

    constructor(props){
      super(props)

      this.state = {profile: props.profile || ''}
    }
    
    render() {
      return (
        <div className="hero is-white">
          <div className="hero-body Profile-title">
            <p className="Profile-desc subtitle is-size-4 is-italic">"{this.state.profile}"</p>
          </div>
        </div>
      )
    }
  }

export default Profile;