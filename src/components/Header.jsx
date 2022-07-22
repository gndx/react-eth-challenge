import React from 'react';
import Avatar from './Avatar';
import Card from './Card';
import { Contenedor } from './Headerstyle';


const Header = ({ avatar, children, name }) => {
  return (
    <Contenedor>
      <Avatar avatar={avatar} />
      <Card>
        <div>
          <h1 className="Header-title">{name}</h1>
          {children}
        </div>
      </Card>
    </Contenedor>
  );
};

export default Header;