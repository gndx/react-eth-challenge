import React, { useContext } from 'react';
import { Context } from '../containers/App';

const Skills = () => {

   // Data from API
   const data = useContext(Context);

    // Componente para reutilizar los items
    // Como no lo usaremos en otro lado lo metemos dentro
    // del componente principal
    const Skill = ({percentage, color, skill}) => {

        return (
            <li className="Skills-item">
                <h3>{skill} ({percentage}%)</h3>
                <div>
                    <div style={{width: `${percentage}%`, background: color}}></div>
                </div>
            </li>
        )
    }

    return (
        <section className='semi-section'>
            <h3 className="Skills-title">
                My Skills
            </h3>
            <ul className='Skills-list'>
                {   // Si ya la api trajo la info muestrala
                    data.skills !== undefined ? 
                        data.skills.map((skill, i) => <Skill key={`${i}--skill`} {...skill}/>) 
                        : <>
                            {/* Elemento mientras carga la info de la API
                                ayuda a pasar el TEST porque el Enzyme no
                                puede manejar contextos y shallow no
                                permite entrar mas abajos en el DOM
                                (Por eso me toca ponerlos en plano)
                            */}
                            <li className="Skills-item"><h3>...</h3><div></div></li>
                            <li className="Skills-item"><h3>...</h3><div></div></li>
                            <li className="Skills-item"><h3>...</h3><div></div></li>
                          </>
                }
            </ul>
        </section>
    )
}

export default Skills;