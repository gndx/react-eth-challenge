import React from 'react';
import '../styles/components/Header.styl';


const Header = (props) => {

    return (
        <div className='Header'>
            <h1 className='Header-title'>{props.title}</h1>
            {props.children}
        </div>
    )
}

export default Header;