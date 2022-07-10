import React from 'react';

const Header = (props) => {

    return (
        <header>
            <div>
                <img src="https://avatars.dicebear.com/api/human/stratoff.svg"></img>
            </div>

            <h1 className="Header-title">Javier Garcia</h1>
            <h4 className="Header-job-title">FullStack Web Developer</h4>

            <div>
                <span className="Header-phone">
                    📞 <a rel="nofollow" href="tel:+573214244268">(+57) 321 4244268</a>
                </span>
                <span className="Header-email">
                    📬 <a rel="nofollow" href="mailto:jegn28@gmail.com">jegn28@gmail.com</a>
                </span>
                <span className="Header-website">
                    💻 <a rel="nofollow" target="_blank" href="https://stratoff.github.io/portfolio/"> My portfolio</a>
                </span>
            </div>

            <small className="Header-address"></small>

            {props.children}
        </header>
    )
}

export default Header;