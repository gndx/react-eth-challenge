import React from 'react';

const AboutCard = ({name, url}) => {
  return (
    <article>
    <div className="About-item">
        {name} - {url}
    </div>
  </article>
  )
}

export default AboutCard;