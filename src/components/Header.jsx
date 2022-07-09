import React from 'react';

const Header = (props) => {

    const {
        name,
        profession,
        phone,
        email,
        website,
        adress,
        avatar
    } = props;

    return (
        <section>
            <div className='Header-picture'>
                <img src={avatar} alt="" />
            </div>
            <div className='Header-content'>
                <h2 className='Header-title'>{name}</h2>
                <p className='Header-job-title'>{profession}</p>
                <a href={`tel:${phone}`} className='Header-phone'>{phone}</a>
                <a href={`mailto:${email}`} className='Header-email'>{email}</a>
                <a href={website} className='Header-website'>{website}</a>
                <p className='Header-adress'>{adress}</p>
                {props.children}
            </div>
        </section>
    );
};

export default Header;