import React, { useContext } from 'react';

const Profile = ({profile}) => {
    return (
        <div id="profile" className="prose" >
            <h2 className="Profile-title section-headline">Profile</h2>
            <p className='Profile-desc'>
            {profile}
            </p>           
        </div>
    );
};

export default Profile;