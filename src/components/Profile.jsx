import React from 'react';

const Profile = (props) => {
    const { profile } = props;
    console.log("🚀 ~ file: Profile.jsx ~ line 5 ~ Profile ~ profile", profile);
    console.log( 'profi')
    return (
    <>
    <div className="Profile-title">
    </div>
    <div className="Profile-desc">
        {profile}
    </div>
    </>
    )
}
export default Profile;