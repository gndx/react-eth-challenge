import React from 'react';

function Header(props) {
    return (
        <header className="Header">
            <h1 className="Header-title">Eimer Castro</h1>
            <h2 className="Header-job-title">job</h2>
            <h3 className="Header-phone">phone</h3>
            <h3 className="Header-email">email</h3>
            <h3 className="Header-website">website</h3>
            <h3 className="Header-address">address</h3>
            <section>
                {props.children}
            </section>
        </header>
    );
}

export default Header;