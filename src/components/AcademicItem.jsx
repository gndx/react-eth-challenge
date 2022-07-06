import React from 'react';

const AcademicItem = ({item}) => {
    return (
        <>
          <h3>{item.degree}</h3>
          <section className="mb-6">
            <div className="lg:inline-block lg:w-3/12 lg:align-top italic mb-2">
              {item.endDate}
            </div>
            <div className="lg:inline-block lg:w-8/12 w-full">
            {item.institution}
            </div>
          </section>      
        </>
    );
};

export default AcademicItem;