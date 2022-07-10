import React from 'react';

const Profile = (props) => {
    return (
        <section className='Profile'>
            <h2 className='Profile-title'>Profile</h2>
            <p className='Profile-desc'>{props.desc}</p>
        </section>
    );
};

export default Profile;