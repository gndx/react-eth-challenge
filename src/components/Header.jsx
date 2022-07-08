import React, { Component } from 'react';

class Header extends Component {
    render() {
        return (
            <div>
                <h1 className="Header-title">Header-title</h1>
                <p className="Header-job-title">Header-job-title</p>
                { this.props.children }
            </div>
        );
    }
}

export default Header;
