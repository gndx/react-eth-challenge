import React from "react";
import Card from "./AboutCard";

export default function About({email = "default@default.com", website = "default.com", phone = "+59300 000 0000", address = "default addres",}) {
  const array = [{type: "email", content: email}, {type: "website", content: website}, {type: "phone", content: phone}, {type: "address", content: address}]

  return (
    <section className="About">
      <h4 className="About-title">¿Deseas que te apoye en tu proyecto web?</h4>
      <ul className="Header-info">
        {array.map((item) => (
          <li key={`${item.type}`} className={`About-item Header-${item.type}`}>
            <Card {...item} />
          </li>
        ))}
      </ul>
    </section>
  )
}