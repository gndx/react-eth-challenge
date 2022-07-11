import React, { useContext } from 'react';
import { Context } from '../containers/App';

const Academic = () => {

    // Data from API
    const data = useContext(Context);

    // Elemento mientras carga la info de la API
    // ayuda a pasar el TEST porque el Enzyme no
    // puede manejar contextos
    const emptyItem = (
        <li className="Academic-item">
            <h3>...</h3>
            <small>----</small>
        </li>
    )

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
                }) : (
                    <>
                        {emptyItem}
                        {emptyItem}
                        {emptyItem}
                    </>
                )}
            </ul>
        </section>
    )

}

export default Academic;