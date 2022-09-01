import React from 'react';

export default function About(props) {
  return (
    <div className="About is-size-4">
      <h2 className="About-title subtitle is-2 has-text-white">{props.data.profession}</h2>
      <div className="level">
        <p className="About-item level-item">Phone: {props.data.phone}</p>
        <p className="About-item level-item"><a mailto={props.data.email}>{props.data.email}</a></p>
        <p className="About-item level-item"><a href={props.data.website}>{props.data.website}</a></p>
        <p className="About-item level-item">Address: {props.data.address}</p>
      </div>
    </div>
  );
}
