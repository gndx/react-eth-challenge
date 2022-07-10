import React from 'react';

function Profile({ data }) {
    let dataFromParent = data;
    if (typeof dataFromParent === 'undefined' || typeof dataFromParent.name === 'undefined') {
        dataFromParent = {};
    }
    const { Profile } = dataFromParent;
    return (
        <div className='Profile-box'>
            <div className='Profile-title'>Perfil</div>
            <div className='Profile-desc'>{Profile}</div>
        </div>
    );
};

export default Profile;
