import React, { useContext } from 'react';
import { Context } from '../containers/App';

const Interest = () => {

    const data = useContext(Context);

    return (
        <section className='semi-section'>
            <h3 className="Interest-title">
                Interests
            </h3>
            <ul className='Interest-list'>
                {
                    data.interest !== undefined ? 
                        data.interest.map((inte, i) => <li key={`${i}--interest`} className="Interest-item">{inte}</li>)
                    : null
                }
            </ul>
        </section>
    )
}

export default Interest;