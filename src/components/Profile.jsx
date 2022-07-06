import React, { useContext } from 'react';
import { AppContext } from '../AppContext';

const Profile = () => {
    const {data: {Profile}}=useContext(AppContext)
    return (
        <div id="profile" className="prose" >
            <h2 className="Profile-title section-headline">Profile</h2>
            <p className='Profile-desc'>
            {Profile}
            </p>           
        </div>
    );
};

export default Profile;