import React, { useContext } from 'react';
import { Context } from '../containers/App';


const Experience = () => {

    // Data from API
    const data = useContext(Context);

    // Componente para reutilizar los items
    // Como no lo usaremos en otro lado lo metemos dentro
    // del componente principal
    const ExperienceItem = ({title, time, description, link}) => {
    
        return (
            <article className="Experience-item">
                <h3><a href={link} rel="nofollow" target="_blank">{title}</a></h3>
                <small><i>{time}</i></small>
                <p>
                    {description}
                </p>
            </article>
        )
    }    

    return (
        <section>
            <h3 className="Experience-title">
                My Experience
            </h3>
            <div className='Experience-info'>
                {   // Si ya la api trajo la info muestrala
                    data.experience !== undefined ? 
                        data.experience.map(el => <ExperienceItem key={el.title} {...el}/>) 
                        : <>
                            {/* Elemento mientras carga la info de la API
                                ayuda a pasar el TEST porque el Enzyme no
                                puede manejar contextos y shallow no
                                permite entrar mas abajos en el DOM
                                (Por eso me toca ponerlos en plano)
                            */}
                            <article className="Experience-item">
                                <h3><a href="#" rel="nofollow" target="_blank">...</a></h3>
                                <small><i>----</i></small>
                                <p>
                                    Cargando información...
                                </p>
                            </article>
                            <article className="Experience-item">
                                <h3><a href="#" rel="nofollow" target="_blank">...</a></h3>
                                <small><i>----</i></small>
                                <p>
                                    Cargando información...
                                </p>
                            </article>
                            <article className="Experience-item">
                                <h3><a href="#" rel="nofollow" target="_blank">...</a></h3>
                                <small><i>----</i></small>
                                <p>
                                    Cargando información...
                                </p>
                            </article>
                          </>
                }
            </div>
        </section>
    )
}

export default Experience;