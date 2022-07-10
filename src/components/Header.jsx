import React from 'react';
import '../styles/components/Header.styl'

const Header = (props) => {

    const {
        name,
        profession,
        avatar
    } = props;

    return (
        <section className='Header'>
            <div className='Header-picture'>
                <img src={avatar} alt="" />
            </div>
            <div className='Header-content'>
                <h2 className='Header-title'>{name}</h2>
                <h4 className='Header-job-title'>{profession}</h4>
                {props.children}
            </div>
        </section>
    );
};

export default Header;