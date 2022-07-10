import React from 'react';

export default function SkillsCard({ name, percentage }) {
    return (
        <div>
        
        <p>
          {name}
        </p>
        <p>
          {percentage}
        </p>
      </div>
    )
}