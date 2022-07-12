import React, { useContext } from 'react';
import { Context } from '../containers/App';

const Interest = () => {
  const data = useContext(Context);

  return (
    <div>
      <h2 className="neon-title Interest-title Interest-item">Intereses</h2>

      <div className="flex mt-2 Interest-item">
        <p className="Interest-item">
          Mis intereses tienen foco en el desarrollo de tecnologías sobre
          <strong className="neon-text"> Ethereum</strong> y
          <strong className="neon-text"> Web3</strong>, además estoy
          profundamente interesado en la ingeniería detrás de
          <strong className="neon-text"> Blockchain</strong>. Creo que las
          tecnologías que rodean al ecosistema cripto tienen el poder de
          revolucionar el mundo tal como lo conocemos. Por otro lado tengo como
          meta aprender
          <strong className="neon-text"> Typescript</strong> para complementar
          mis proyectos.
        </p>
      </div>
    </div>
  );
};

export default Interest;
