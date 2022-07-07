import React from "react";
import styled from "styled-components";

export default function Skills({skills = [{}, {}, {}]}) {
  console.log(skills)
  const Fill = styled.div`
    width: ${props => props.amount};
    height: 100%;
    background-color: rgba(26,67,139,1);
    display: flex;
    align-items: center;
    p {
      margin-left: 1.2em;
      font-size: 1.2em;
      color: white
    }
  `
  return (
    <section className="Skills">
      <h2 className="Skills-title">Skills</h2>
      <ul>
        {skills?.map((item, index) => (
          <li key={index} className="Skills-item">
            <h5>{item.name}</h5>
            <div className="Skills-item-container">
              <Fill amount={`${item.percentage}`}>
                <p>{item.percentage}</p>
              </Fill>
            </div>
          </li>
        ))}
      </ul>
    </section>
  )
}