import React, { useEffect, useState } from 'react';
import { getData } from '../utils/getData';

export default function About() {
  const [address, setAddress] = useState("")
  const [phone, setPhone] = useState("")
  const [email, setEmail] = useState("")
  const [profession, setProfession] = useState("")

  useEffect(async () => {
    const { address, phone, email, profession } = await getData('http://localhost:3000/data');
    setAddress(address)
    setPhone(phone)
    setEmail(email)
    setProfession(profession)
  }, []);
  return (
    <div>
      <h4 className="About-title">{profession}</h4>
      <div className="list-about">
        <div className="About-item">address: {address}</div>
        <div className="About-item">phone: {phone}</div>
        <div className="About-item">email: {email}</div>
      </div>
    </div>
  );
}
