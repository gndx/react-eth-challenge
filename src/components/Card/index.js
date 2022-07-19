import React from 'react';
import '../../styles/components/Card.css';

function Card({ children, Tag = 'section', flexDirection = 'column' }) {
  return (
    <Tag style={{ flexDirection }} className='Container'>
      {children}
    </Tag>
  );
}

export default Card;
