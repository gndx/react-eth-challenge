import React from "react"
import '../../styles/components/About.css'

const About = (props) => {
    return (
        <section className="About">
            <h1 className="About-title">{props.data?.profession}</h1>
            <div>
                <div className="About-item">{props.data?.email}</div>
                <div className="About-item">{props.data?.phone}</div>
                <div className="About-item">{props.data?.website}</div>
                <div className="About-item">{props.data?.address}</div>
            </div>
        </section>
    )
}

export default About;
