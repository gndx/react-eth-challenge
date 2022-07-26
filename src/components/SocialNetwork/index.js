import React from 'react';

const SocialNetwork = ({ social }) => {
  if (social === undefined) {
    social = [
      {
        name: '',
        url: '',
      },
      {
        name: '',
        url: '',
      },
      {
        name: '',
        url: '',
      },
    ];
  }
  return (
    <>
      <div className="InterestContainer">
        <h4 className="SocialNetwork-title">Redes Sociales:</h4>
        <div className="section">
          <ul>
            <li className="SocialNetwork-item AcademicContainer">
              <a href={social[0].url}>
                {social[0].name.charAt(0).toUpperCase() +
                  social[0].name.slice(1)}
              </a>
            </li>
            <li className="SocialNetwork-item AcademicContainer">
              <a href={social[1].url}>
                {social[1].name.charAt(0).toUpperCase() +
                  social[1].name.slice(1)}
              </a>
            </li>
            <li className="SocialNetwork-item AcademicContainer">
              <a href={social[2].url}>
                {social[2].name.charAt(0).toUpperCase() +
                  social[2].name.slice(1)}
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default SocialNetwork;
