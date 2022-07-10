import React from 'react';
import "./Interest.scss";

const Interest = () => {
    return (
        <section className="Interest">
            <h2 className='Interest-title'>Interests</h2>
            <ul>
                <li className="Interest-item"><strong>Blockchain</strong></li>
                <li className="Interest-item"><strong>Content creation</strong></li>
                <li className="Interest-item"><strong>NFTs</strong></li>
            </ul>
        </section>
    );
}

export default Interest;