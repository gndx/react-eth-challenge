import React from "react";

const Profile = (props) => {
    return(
        <div className="profile">     
            <div className="Profile-title">About me</div>
            <div className="Profile-desc">
                <p> 👨🏻‍💻 {props.data.profile}</p>
            </div>        
        </div>
    );
}

export default Profile;