import React from 'react';
import '../styles/components/Card.styl';

const Card = ({children}) => {
    return <article className ='Card'>{children}</article>;
};

export default Card;