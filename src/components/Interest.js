import React from "react";

const Interest = (props) => {
    return(
        <div className="interest">
            <div className="Interest-title">Interests</div>
            
            <div>
            {props.data.interest.map((interest, key) => (
                <li className="Interest-item" key={key}>
                    {interest}
                </li>    
                ))}
      
            </div>           
        </div>
    );
}

export default Interest;