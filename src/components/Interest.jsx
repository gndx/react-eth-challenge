import React from "react";
class Interest extends React.Component {    

    constructor(props){
      super(props)

      this.state = { interest : props.interest || Array(4).fill('') }
    }

    render() {
      return (        
        <p className="Interest-title subtitle">Intereses:&nbsp;
          {
            this.state.interest.map((data, k) => 
            <span className="Interest-item is-spaced" key={k}>
              {data}
            </span> 
            )
          }
        </p>
      )
    }
  }

export default Interest;