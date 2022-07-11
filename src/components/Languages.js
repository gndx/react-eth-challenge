import React, { useContext } from 'react';
import { Context } from '../containers/App';

const Languages = () => {

    // Data from API
    const data = useContext(Context);

    // Componente para reutilizar los items
    // Como no lo usaremos en otro lado lo metemos dentro
    // del componente principal
    const Language = ({percentage, color, language}) => {
        return (
            <li className="Languages-item">
                <h3>{language} ({percentage}%)</h3>
                <div>
                    <div style={{width: `${percentage}%`, background: color}}></div>
                </div>
            </li>
        )
    }

    return (
        <section className='semi-section'>
            <h3 className="Languages-title">
                Languages
            </h3>
            <ul className='Languages-list'>
                {   // Si ya la api trajo la info muestrala
                    data.languages !== undefined ? 
                        data.languages.map((lang, i) => <Language key={`${i}--lang`} {...lang}/>) 
                        : <>
                            {/* Elemento mientras carga la info de la API
                                ayuda a pasar el TEST porque el Enzyme no
                                puede manejar contextos y shallow no
                                permite entrar mas abajos en el DOM
                                (Por eso me toca ponerlos en plano)
                            */}
                            <li className="Languages-item"><h3>...</h3><div></div></li>
                            <li className="Languages-item"><h3>...</h3><div></div></li>
                            <li className="Languages-item"><h3>...</h3><div></div></li>
                          </>
                }
            </ul>
        </section>
    )
}

export default Languages;