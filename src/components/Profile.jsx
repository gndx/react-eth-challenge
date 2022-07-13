import React from 'react';
import '../styles/profile.css'
const Profile = (props) => {
    const { profile } = props;
    return (
    <>
    <div className="container">
    <div className="container-left">
    <h3 className="Profile-title">Sobre mi</h3>
    </div>
    <div className="container-right">
    <p className="Profile-desc">
        {profile}
    </p>
    </div>
    </div>
    </>
    )
}
export default Profile;