import React, { useContext } from 'react';
import { Context } from '../containers/App';

const Header = (props) => {

    // Data from API
    const data = useContext(Context);

    // Easier to read
    const {
        profession,
        address,
        email,
        website,
        phone,
        avatar,
        name,
    } = data;
    

    return (
        <header>
            <div className='Header-image'>
                <img src={avatar} alt=''></img>
            </div>
            <div className='Header-info'>

                <h1 className="Header-title">{name}</h1>
                <h4 className="Header-job-title">{profession}</h4>
                <small className="Header-address">{address}</small>

                <div>
                    <span className="Header-phone">
                        📞 <a rel="nofollow" href={`tel+${phone}`}>Call me</a>
                    </span>
                    <span className="Header-email">
                        📬 <a rel="nofollow" href={`mailto+${email}`}>Mail me</a>
                    </span>
                    <span className="Header-website">
                        💻 <a rel="nofollow" target="_blank" href={website}>Check my portfolio</a>
                    </span>
                </div>

                {props.children}
            </div>

        </header>
    )
}

export default Header;