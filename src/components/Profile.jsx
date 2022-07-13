import React from "react";

function Profile({profile}){
    return (
        <div className="Profile">
            <h1 className="Profile-title">Profile</h1>
            <p className="Profile-desc">{profile}</p>
        </div> 
    );
}

export {Profile}
