import React, { useContext } from 'react';
import { Context } from '../containers/App';

const Academic = () => {

    // Data from API
    const data = useContext(Context);

    return (
        <section className='semi-section'>
            <h3 className="Academic-title">
                Academic information
            </h3>
            <ul>
                {/* Si ya la api trajo la info muestrala */}
                {data.Academic !== undefined ? data.Academic.map((deg, i) => {
                    return (
                        <li key={`${i}--academic`} className="Academic-item">
                            <h3>{deg.degree}</h3>
                            <small>{deg.time}</small>
                        </li>
                    )
                }) : null}
            </ul>
        </section>
    )

}

export default Academic;