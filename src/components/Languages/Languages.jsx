import React from 'react';
import "./Languages.scss";
import { AppContext } from "../AppContext";

const Languages = () => {

    const { data } = React.useContext(AppContext);

    const { languages } = data;

    console.log(data)

    return (
        <section className='Languages'>
            <h2 className='Languages-title'>Languages</h2>
            <ul>
                { languages ? languages.map(lan => <li key={lan.name} className='Languages-item'><strong>{lan.name}</strong> {lan.level}</li>) : "" }
            </ul>
        </section>
    );
}

export default Languages;