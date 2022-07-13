import React from 'react';

const Profile = (props) => {
    const { profile } = props;
    console.log("🚀 ~ file: Profile.jsx ~ line 5 ~ Profile ~ profile", profile);
    console.log( 'profi')
    return (
    <>
    <div className="Profile-title">
        hola
    </div>
    <div className="Profile-desc">
        hola2
        {profile}
    </div>
    </>
    )
}
export default Profile;