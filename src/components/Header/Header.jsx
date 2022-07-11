import React from 'react';
import "./Header.scss";
import { AppContext } from '../AppContext';  


const Header = () => {

    const { data } = React.useContext(AppContext);

    return (
        <section className='Header'>
            <h1 className='Header-title'>{data ? data.name : ""}</h1>
            <p>{data ? data.profession : ""}</p>
            <ul>
                <li>
                    <strong>Phone:</strong>
                    <a 
                        href="https://wa.me/584122249713"
                        target="_blank" 
                        title="Phone"> {data ? data.phone : ""}</a>
                </li>
                <li>
                    <strong>Email:</strong>
                    <a 
                    href="mailto:leandrogavidia1234@gmail.com" target="_blank" title="Email"> {data ? data.email : ""}</a>
                </li>
                <li>
                    <strong>Website:</strong>
                    <a href={data ? data.website : ""} target="_blank" title="Website"> GitHub profile</a>
                </li>
                <li><strong>Location:</strong> {data ? data.address : ""}</li>
            </ul>
        </section>
    )
}

export default Header;