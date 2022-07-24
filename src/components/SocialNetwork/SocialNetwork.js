import React from 'react';

const Interest = ({ social }) => {
  return (
    <>
      <div className="InterestContainer">
        <h4>Redes Sociales:</h4>
        <div className="section">
          <ul>
            {social === undefined
              ? 'Loading...'
              : social.map((network, index) => {
                  return (
                    <li className="AcademicContainer" key={index}>
                      <a href={network.url}>
                        {network.name.charAt(0).toUpperCase() +
                          network.name.slice(1)}
                      </a>
                    </li>
                  );
                })}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Interest;
