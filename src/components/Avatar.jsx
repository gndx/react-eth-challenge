import React from 'react';
import { Imagen } from './Avatarstyle';


const Avatar = ({ avatar }) => {
  return <Imagen className="Avatar" src={avatar} alt="avatar" />;
};

export default Avatar;