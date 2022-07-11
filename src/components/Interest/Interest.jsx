import React from 'react';
import "./Interest.scss";
import { AppContext } from "../AppContext";

const Interest = () => {

    const { data } = React.useContext(AppContext);

    const { interest } = data;

    return (
        <section className="Interest">
            <h2 className='Interest-title'>Interests</h2>
            <ul>
                { interest ? interest.map(int => <li key={int} className="Interest-item"><strong>{int}</strong></li>) : "" }
            </ul>
        </section>
    );
}

export default Interest;