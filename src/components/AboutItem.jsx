import React from 'react';

function AboutItem({ url, text }) {
  return (
    <li>
      <a href={url} target='_blank' rel='noopener noreferrer'>
        {text}
      </a>
    </li>
  );
};

export default AboutItem;
