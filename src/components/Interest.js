import React, { useContext } from 'react';
import { Context } from '../containers/App';

const Interest = () => {

    // Data from API
    const data = useContext(Context);

    return (
        <section className='semi-section'>
            <h3 className="Interest-title">
                Interests
            </h3>
            <ul className='Interest-list'>
                {   // Si ya la api trajo la info muestrala
                    data.interest !== undefined ? 
                        data.interest.map((inte, i) => <li key={`${i}--interest`} className="Interest-item">{inte}</li>)
                    : <>
                        {/* Elemento mientras carga la info de la API
                            ayuda a pasar el TEST porque el Enzyme no
                            puede manejar contextos 
                        */}
                        <li className="Interest-item">Searching</li>
                        <li className="Interest-item">in the</li>
                        <li className="Interest-item">labs...</li>
                      </>
                }
            </ul>
        </section>
    )
}

export default Interest;