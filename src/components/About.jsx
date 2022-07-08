import React, { Component } from "react";

class About extends Component {
    render() {
        return (
            <div>
                <h1 className="About-title">About-title</h1>
                <div>
                    <ul>
                    <li className="About-item">About-phone</li>
                    <li className="About-item">About-email</li>
                    <li className="About-item">About-wesite</li>
                    <li className="About-item">About-address</li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default About;
