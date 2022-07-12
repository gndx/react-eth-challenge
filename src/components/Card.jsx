import React from 'react';
import '../styles/components/dist/Card.css';

const Card = ({ children }) => {
  return <article className="Card">{children}</article>;
};

export default Card;
