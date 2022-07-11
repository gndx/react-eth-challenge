import React from 'react';

export default function Skills(props) {
  return (
    <div className="Skills section content is-size-4">
      <h2 className="Skills-title subtitle is-2">Skills</h2>
      <ul>
        {props.data.skills.map((skill, k) => (
          <li className="Skills-item" key={k}>
            <p className="Skills-item-title">
              {skill.name}
              <br />
            </p>
            <progress
              className="progress is-small"
              value={skill.percentage}
              max="100"
            >
              {skill.percentage}%
            </progress>
          </li>
        ))}
      </ul>
    </div>
  );
}
