import React, { useEffect, useState } from 'react';
import { getData } from '../utils/getData';
import About from './About';

export default function Header() {

  const[name, setName] = useState("")
  const[avatar, setAvatar] = useState("")

  useEffect(async () => {
    const { name, avatar } = await getData('http://localhost:3000/data');
    setName(name);
    setAvatar(avatar);
  }, []);

  return (
    <div className="header">
      <img src={`${avatar}`} className="image" />
      <div>
        <h2 className="Header-title">{name}</h2>
        <About/>
      </div>
    </div>
  );
}
