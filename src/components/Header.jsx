import React from 'react';
import '../styles/components/Header.styl';
import Avatar from './Avatar';
import Card from './Card';
const Header = ({children}) => {
    return (
        <Header className = 'Header'>
            <Avatar avatar={avatar}/>
            <Card>
                <div>
                    //<h1 className='Header-title'>Ruben Dario Troche Piñanez</h1>
                    <h1 className='Header-title'>{name}</h1>
                    {children}
                </div>
            </Card>
        </Header>
    );
};

export default Header;