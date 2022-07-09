import React from "react";
class Interest extends React.Component {    

    constructor(props){
      super(props)

      this.state = { interest : props.interest || [ "java", "c#", "ethereum", "kobol"] }
    }

    render() {
      return (        
        <div className="hero is-white has-equal-height">
          <div className="hero-body">
            <p className="Interest-title title">Intereses</p>
            <div className="columns is-multiline">
              {
                this.state.interest.map((data, k) => 
                <div className="Interest-item column" key={k}>
                  <p className="subtitle">{data}</p>
                </div> 
                )
              }
            </div>
          </div>
        </div>
      )
    }
  }

export default Interest;