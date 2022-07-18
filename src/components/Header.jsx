import React from 'react';
import { Cabecera  } from '../styles/components/Header';

const Header = ({ children, data }) => {
    return (
        <Cabecera>
            <section className="header">
            <section className="header-img">
                <img src={data.avatar} alt="portfolio img" />
            </section>
            <section className="header-box">
                <h1 className="Header-title">{data.name}</h1>
                <p className="Header-job-title">{data.professional}</p>
                <p className="Header-phone">{data.phone}</p>
                <p className="Header-email">{data.email}</p>
                <p className="Header-website">{data.website}</p>
                <p className="Header-address">{data.address}</p>
                {children}
            </section>
            </section>
        </Cabecera>
        
    )
}

export default Header;