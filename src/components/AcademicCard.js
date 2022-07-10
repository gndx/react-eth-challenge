import React from 'react';

export default function AcademicCard({ institution, description }) {
    return (
        <div>
        
        <p>
          {institution}
        </p>
        <p>
          {description}
        </p>
      </div>
    )
}