import React from "react"
import '../../styles/components/Languages.css'

const Languages = (props) => {
    return (
        <section className='Languages'>
            <h1 className='Languages-title'>Languages</h1>
            <div className='Languages-items'>
                {props.data?.languages.map((language) => (
                    <div className='Languages-item' key={language.name}>
                        <h3>{language.name}</h3>
                        <h4>{language.percentage}</h4>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Languages