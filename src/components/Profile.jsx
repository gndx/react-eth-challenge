import React from 'react';

const Profile = (props) => {
    return (
        <div className='Profile section content is-size-4'>
            <h2 className='Profile-title subtitle is-2'>
                Profile
            </h2>
            <p className='Profile-desc'>
                {props.data.Profile}
            </p>
        </div>
    )
}

export default Profile;