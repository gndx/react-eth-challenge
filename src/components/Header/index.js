import React from 'react'
// const photo = '../../Assets/Images/profile.jpg'
import '../../styles/components/App.styl';


const Header = (props) => {
    const {children} = props;
    return (
        <>
            <div className="HeaderContainer">
                <div className="Headersection1">
                    <img src={props.data.avatar} alt="ProfilePic" />
                </div>
                <div className="Headersection2">
                    <h4>{props.data.name}</h4>
                    <div>
                        {children}
                    </div>
                </div>
                
            </div>
        </>
    )
}

export default Header