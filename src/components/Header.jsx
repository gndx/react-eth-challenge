import React from 'react';
import '../styles/components/App.styl'

const Header = (data) => {

    const {
        name,
        profession,
        avatar
    } = data;

    return (
        <section className='Header'>
            <div className='Header-picture'>
                <img src={avatar} alt="" />
            </div>
            <div>
                <h2 className='Header-title'>{name}</h2>
                <h4>{profession}</h4>
                {data.children}
            </div>
        </section>
    );
};

export default Header;