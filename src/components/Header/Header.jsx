import React from 'react';
import "./Header.scss";


const Header = () => {

    return (
        <section className='Header'>
            <h1 className='Header-title'>Leandro Gavidia Santamaria</h1>
            <p>React front-end developer</p>
            <ul>
                <li>
                    <strong>Phone:</strong>
                    <a href="https://wa.me/584122249713" target="_blank" title="Phone"> +58 0412-224-9713</a>
                </li>
                <li>
                    <strong>Email:</strong>
                    <a href="mailto:leandrogavidia1234@gmail.com" target="_blank" title="Email"> Leandrogavidia1234@gmail.com</a>
                </li>
                <li>
                    <strong>Website:</strong>
                    <a href="https://github.com/LeanderGS" target="_blank" title="Website"> GitHub profile</a>
                </li>
                <li><strong>Location:</strong> Caracas, Venezuela</li>
            </ul>
        </section>
    )
}

export default Header;