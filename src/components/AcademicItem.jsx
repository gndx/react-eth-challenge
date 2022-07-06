import React from 'react';

const AcademicItem = ({item}) => {
    return (
        <>
          <h3>Bsc. Computer Sciences</h3>
          <section className="mb-6">
            <div className="lg:inline-block lg:w-3/12 lg:align-top italic mb-2">
              Jul.&nbsp;2019:
            </div>
            <div className="lg:inline-block lg:w-8/12 w-full">
              University Street
            </div>
          </section>      
        </>
    );
};

export default AcademicItem;