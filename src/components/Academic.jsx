import React, { useContext } from 'react';
import { Context } from '../containers/App';

const Academic = () => {
  const data = useContext(Context);

  return (
    <div>
      <h2 className="-3xl neon-title Academic-title">Estudios</h2>

      <div className="flex flex-col gap-5 mt-2">
        {data &&
          data.Academic?.map((degree, index) => {
            return (
              <div className="flex flex-col p-1 Academic-item" key={index}>
                <div>
                  <a
                    href={degree.site}
                    target="_blank"
                    className="-xl cursor-pointer neon-link"
                  >
                    {degree.degree} - {degree.institution}
                  </a>
                </div>
                <p className="-sm mt-2">{degree.description}</p>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Academic;
