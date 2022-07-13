import React from 'react';

export default function Profile({profile}){
    return (
        <>
             <section className='Profile-container'>
                <h2 className='Profile-title'>Profile</h2>
                <div className="Profile-desc">{profile}</div>
            </section>
        </>
    )
}