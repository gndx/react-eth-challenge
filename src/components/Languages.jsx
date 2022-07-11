import React, { useContext } from 'react';
import { Context } from '../containers/App';

const Languages = () => {
  const data = useContext(Context);

  return (
    <div>
      <h2 className="neon-title Languages-title">Lenguajes</h2>

      <div className="flex mt-2 Languages-item">
        <p className="Languages-item">
          En este momento tengo conocimiento sobre los lenguajes
          <strong className="neon-text Languages-item">
            {' '}
            Español (Nativo)
          </strong>{' '}
          e<strong className="neon-text"> Ingles (B2)</strong>, debo agregar que
          además me encuentro en plena formación para mejorar mi conocimiento en
          este ultimo.
        </p>
      </div>
    </div>
  );
};

export default Languages;
