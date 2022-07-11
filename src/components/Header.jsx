import React from 'react';

const Header = ({data = {}}) => {

    console.log("Header ");
    console.log(data);

    return ( 
        <header className='Header-container container'>
            <div className="row align-items-center justify-content-around">
                <div className="col-2">
                    <img className="Header-image" src={data.avatar} alt="" />
                </div>
                <div className="col-8">
                    <h1 className='Header-title'>{data.name}</h1>
                    <h3 className="Header-job-title">{data.profession}</h3>
                    <p className="Header-phone">{'Phone: ' + data.phone}</p>
                    <p className="Header-email">Email: <a href={'mailto:' + data.email}>{data.email}</a></p>
                    <p className="Header-email">Web: <a href={data.website} className="Header" target="_blank">{data.website}</a>
                    </p>
                </div>
            </div>
        </header>
     );
}
 
export default Header;