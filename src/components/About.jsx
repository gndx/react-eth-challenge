import React from "react";

function About({name, profession,address,email, website, phone}){
    return (
       <React.Fragment>
          <div className="About">
            <h1 className="About-title">{name}</h1>
            <p className="About-item">{profession}</p>
            <p className="About-item">{phone}  -  {email}  -  {website}</p>
            <p className="About-item">{address}</p>
            </div>  
        </React.Fragment> 
    );
}

export {About}