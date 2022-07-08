import React from 'react'

const AcademicCard = ({degree, description, institution, startDate, endDate}) => {
    return (
        <article>
          <div className="Academic-item">
              {degree} - {description} - {institution} - {startDate} to {endDate}
          </div>
        </article>
      );
}

export default AcademicCard;