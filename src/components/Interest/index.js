import React from "react"
import '../../styles/components/Interest.css'

const Interest = (props) => {
    return (
        <section className='Interest'>
            <h1 className='Interest-title'>Interest</h1>
            <div className='Interest-items'>
                {props.data?.interest.map((interest) => (
                    <div className='Interest-item' key={interest}>
                        <h4>{interest}</h4>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Interest