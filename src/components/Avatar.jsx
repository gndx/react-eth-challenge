import React from 'react';
import '../styles/components/Avatar.styl'

const Avatar = ({avatar}) => {
    return <img className='Avatar' src={avatar} alt ='profile image tatita2021' />;
    //return (
        //<Img
        //    className='Avatar'
        //    src='http://en.gravatar.com/avatar/ef3ca8ef02de23da584520516503660e?size=200'
        //    alt='avatar'
        ///>

    //);
};

export default Avatar;
